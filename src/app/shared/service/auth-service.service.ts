import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

interface LoginResponse {
  access_token: string;
  access_token_expires_on: string;
  token_type: string;
  refresh_token: string;
  refresh_token_expires_on: string;
  username: string;
  name: string;
  sap_reader_id: string;
  employee_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private tokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';
  private userKey = 'user';
  baseUrl: string;
  

  constructor(private http: HttpClient, private router: Router) {
     this.baseUrl = localStorage.getItem('apiUrl') || 'https://onspot-api-prd-01.mwsc.com.mv/v1/';
   }

    login(credentials: { domain_username: string; password: string; device: string; client: string }): Observable<LoginResponse> {
        const body = new HttpParams()
    .set('domain_username', credentials.domain_username)
    .set('domain_password', credentials.password)
    .set('device', credentials.device);

  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });
    return this.http.post<LoginResponse>(this.baseUrl + 'auth/app-login', body.toString(), { headers }).pipe(
      tap((res) => this.saveAuthData(res)),
      catchError(this.handleError)
    );
  }

   refreshToken() {
    const accessToken = this.getToken();
    const refreshToken = this.getRefreshToken();

    if (!accessToken || !refreshToken) {
      this.logout();
      return throwError(() => new Error('No refresh token available'));
    }

    return this.http.post<any>(this.baseUrl  + 'auth/refresh-token', {
      access_token: accessToken,
      refresh_token: refreshToken
    }).pipe(
      tap((res) => this.saveAuthData(res)),
      catchError((err) => {
        this.logout();
        return throwError(() => new Error('Session expired. Please login again.'));
      })
    );
  }
    setBaseUrl(url: string) {
    this.baseUrl = url;
    localStorage.setItem('apiUrl', url);
  }

    // 🔹 Save tokens + user info
  private saveAuthData(res: any) {
    localStorage.setItem(this.tokenKey, res.access_token);
    localStorage.setItem(this.refreshTokenKey, res.refresh_token);
    localStorage.setItem(this.userKey, JSON.stringify({
      username: res.username,
      name: res.name,
      employee_id: res.employee_id,
      sap_reader_id: res.sap_reader_id
    }));
  }

// 🔹 Getters
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  getUser(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // 🔹 Logout
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // 🔹 Check auth at app start or component init
  checkAuth() {
    console.log('Checking authentication...isLoggedIn:', this.isLoggedIn());
    if (!this.isLoggedIn()) {
      this.logout();
    }
  }


  private handleError(error: HttpErrorResponse) {
    let errMsg = 'An unknown error occurred';
    if (error.error) {
      if (error.error.error_message) {
        errMsg = error.error.error_message;
      }
      if (error.error.errors?.domain_username) {
        errMsg = error.error.errors.domain_username[0];
      }
    }
    return throwError(() => new Error(errMsg));
  }
}
