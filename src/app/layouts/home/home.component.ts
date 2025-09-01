import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../shared/service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    
    if (!this.authService.isLoggedIn()) {
      // Try to refresh token
      this.authService.refreshToken().subscribe({
        next: () => console.log('Token refreshed successfully'),
        error: () => this.authService.logout()
      });
    }
  }

  
}
