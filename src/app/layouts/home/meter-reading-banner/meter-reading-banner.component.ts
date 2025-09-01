import { Component, OnInit } from '@angular/core';
import { MeterReadingService } from '../../../shared/service/meter-reading.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meter-reading-banner',
  templateUrl: './meter-reading-banner.component.html',
  styleUrls: ['./meter-reading-banner.component.scss']
})
export class MeterReadingBannerComponent implements OnInit {
  meterReadings: any[] = [];
downloading = false;
  constructor(private meterReadingService: MeterReadingService,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  downloadMeterReadings(){
    this.downloading = true;
    this.meterReadingService.getAssignedReadings().subscribe({
      next: (data) => {
        this.meterReadings = data;
        this.downloading = false;
        localStorage.setItem('meterReadings', JSON.stringify(data.customerDetails));
      const mruArray = data.customerDetails.map(item => item.meter_reading_mru);
      const uniqueMruArray = Array.from(new Set(mruArray));
      console.log("Unique Meter Reading MRUs:", uniqueMruArray); 
      console.log("Unique Meter Reading MRUs:", mruArray); 

      localStorage.setItem('meterReadingMru', JSON.stringify(uniqueMruArray));
      this.meterReadingService.triggerFunction();
         this.toastrService.success('Meter readings downloaded successfully.');

      },
      error: (err) => {
        console.error('Failed to fetch meter readings:', err);
        if (err.status === 401) {
         this.toastrService.error(err.message || 'Unauthorized access. Please log in again.'); 
        }
        this.downloading = false;
      }
    });
  
  }
  
}
