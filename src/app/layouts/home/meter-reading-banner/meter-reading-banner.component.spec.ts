import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterReadingBannerComponent } from './meter-reading-banner.component';

describe('MeterReadingBannerComponent', () => {
  let component: MeterReadingBannerComponent;
  let fixture: ComponentFixture<MeterReadingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterReadingBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterReadingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
