import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { MeterReadingService } from '../../../shared/service/meter-reading.service';

@Component({
  selector: 'app-meter-reading-list',
  templateUrl: './meter-reading-list.component.html',
  styleUrls: ['./meter-reading-list.component.scss']
})
export class MeterReadingListComponent implements OnInit {

  mruId!: string;
  allReadings: any[] = [];
  filteredReadings: any[] = [];
  currentReading: string = '';
  readingData: any = {};
  loading: boolean = false;
  imglLoading: boolean = false;
   selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(
    private route: ActivatedRoute,
    private meterReadingService: MeterReadingService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    // get mruId from route
    this.mruId = this.route.snapshot.paramMap.get('mruId') || '';

    // get all readings from localStorage
    this.allReadings = JSON.parse(localStorage.getItem('meterReadings') || '[]');

    // filter readings for this MRU
    this.filteredReadings = this.allReadings.filter(
      (item) => item.meter_reading_mru === this.mruId
    );

    console.log('Showing readings for MRU:', this.mruId, this.filteredReadings);

  }

  submitReading(reading_mrd: string, curr_reading: number): void {
    console.log('Submitting reading:', reading_mrd, curr_reading);

    this.loading = true;
    this.readingData = {
      meter_reading_mrd: reading_mrd,
      current_reading: curr_reading
    };
    this.meterReadingService.submitCurrentReading(this.readingData).subscribe({
      next: (response) => {
        this.loading = false;
        console.log('Reading submitted successfully:', response);
        if (response.is_successful) {
          this.toastrService.success(response.message);
        }
        if (!response.is_successful){
            this.toastrService.error(response.message);

        }
      },
      error: (error) => {
        this.loading  = false;
        console.log('Error submitting reading:', error.error);
        console.log('Error submitting reading:', error.error.error_message);
        this.toastrService.error(error.error.error_message || 'Error submitting reading');
      }
    });
  }
    onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;

      // For preview
      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }
    uploadImage() {
      this.imglLoading = true;
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.meterReadingService.uploadMeterReadingFile(
    '00000000000009966340',  // example meter_reading_mrd
    'Sample comment',        // example comment
    this.selectedFile
  ).subscribe({
    next: (res) => {
      this.imglLoading = false;
 this.toastrService.success('Upload successful');
      console.log('Upload successful', res)
    },
    error: (err) => {
      this.imglLoading = false;
      console.error('Upload failed', err)
          this.toastrService.error('Upload failed');
    }
  });
  }

}
