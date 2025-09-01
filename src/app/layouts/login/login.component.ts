import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../shared/service/auth-service.service';
import { API_ENDPOINTS } from '../../shared/service/api-config';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    credentials = { domain_username: '', password: '', device: environment.device, client: environment.client };
  errorMessage: string | null = null;
  loading = false;
   apiUrls = API_ENDPOINTS;
  selectedUrl = this.apiUrls[0].url; 


  constructor(private authService: AuthServiceService, private router: Router) { }
    onLogin() {
    this.loading = true;
    this.errorMessage = null;

    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log('Login successful', res);
        this.router.navigate(['/home']); // redirect after login
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {

  }

onApiUrlChange(event: any) {
  const newUrl = event.target.value;
  this.authService.setBaseUrl(newUrl);
}

}
