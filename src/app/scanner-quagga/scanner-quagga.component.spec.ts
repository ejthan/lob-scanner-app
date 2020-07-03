import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerQuaggaComponent } from './scanner-quagga.component';

describe('ScannerQuaggaComponent', () => {
  let component: ScannerQuaggaComponent;
  let fixture: ComponentFixture<ScannerQuaggaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannerQuaggaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerQuaggaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
