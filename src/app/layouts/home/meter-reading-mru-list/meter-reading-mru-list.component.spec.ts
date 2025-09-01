import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterReadingMruListComponent } from './meter-reading-mru-list.component';

describe('MeterReadingMruListComponent', () => {
  let component: MeterReadingMruListComponent;
  let fixture: ComponentFixture<MeterReadingMruListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterReadingMruListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterReadingMruListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
