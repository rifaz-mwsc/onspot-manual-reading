import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeterReadingService } from '../../../shared/service/meter-reading.service';
@Component({
  selector: 'app-meter-reading-mru-list',
  templateUrl: './meter-reading-mru-list.component.html',
  styleUrls: ['./meter-reading-mru-list.component.scss']
})
export class MeterReadingMruListComponent implements OnInit {
meterReadingMru: any[] = [];
meterReadings: any[] = [];
  constructor(private router: Router, private meterReadingService: MeterReadingService) { 
        this.storeReading();
  }

  ngOnInit(): void {
      this.meterReadingService.callFunction$.subscribe(() => {
    this.storeReading();
  });


  }

  storeReading(){
    this.meterReadings = JSON.parse(localStorage.getItem('meterReadings') || '[]');
    this.meterReadingMru = JSON.parse(localStorage.getItem('meterReadingMru') || '[]');
    console.log(this.meterReadings);
    console.log(this.meterReadingMru);

  }
  ViewMeterReadings(mruId: any): void {
    // Implement the logic to view meter readings for the selected MRU
    this.router.navigate([`/${mruId}`]); // navigate to /M0001 etc.
    console.log('View meter readings for MRU:', mruId);
  }

}
