import { Component } from '@angular/core';
import { AuthServiceService } from './shared/service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Unice';
  constructor(private authService: AuthServiceService) { }
  
  ngOnInit() {
  this.authService.checkAuth();
}
}
