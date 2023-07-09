import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPickerComponent } from './currency-picker.component';

describe('CurrencyPickerComponent', () => {
  let component: CurrencyPickerComponent;
  let fixture: ComponentFixture<CurrencyPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyPickerComponent]
    });
    fixture = TestBed.createComponent(CurrencyPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
