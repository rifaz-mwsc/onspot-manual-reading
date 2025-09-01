import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeterReadingService {

    private callFunctionSource = new Subject<void>();
  callFunction$ = this.callFunctionSource.asObservable();
  baseUrl: string;

 constructor(
    private http: HttpClient,
    private authService: AuthServiceService
  ) {
    this.baseUrl = localStorage.getItem('apiUrl') || 'https://onspot-api-prd-01.mwsc.com.mv/v1/';
  }
    triggerFunction() {
    this.callFunctionSource.next();
  }

    getAssignedReadings(): Observable<any> {
      this.baseUrl = localStorage.getItem('apiUrl') || 'https://onspot-api-prd-01.mwsc.com.mv/v1/';
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(this.baseUrl + 'ecc-manual-meter-reading/assigned', { headers });
  }
  uploadMeterReadingFile(meterReadingMrd: string, comment: string, file: File): Observable<any> {
    this.baseUrl = localStorage.getItem('apiUrl') || 'https://onspot-api-prd-01.mwsc.com.mv/v1/';
     const token = this.authService.getToken();
    const params = new HttpParams()
      .set('meter_reading_mrd', meterReadingMrd)
      .set('comment', comment);
 const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const formData = new FormData();
    formData.append('UploadFile', file, file.name); // key = UploadFile, value = binary file

    return this.http.post(this.baseUrl  + 'ecc-meter-reading/file', formData, { params, headers });
  }

  submitCurrentReading(readingData: any): Observable<any> {
    this.baseUrl = localStorage.getItem('apiUrl') || 'https://onspot-api-prd-01.mwsc.com.mv/v1/';
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const url = this.baseUrl + 'ecc-meter-reading/current-reading-using-mrd';

    return this.http.post<any>(url, readingData, { headers });
  }

}
