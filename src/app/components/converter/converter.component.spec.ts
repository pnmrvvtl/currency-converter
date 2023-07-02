import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Converter } from './converter.component';

describe('ConverterComponent', () => {
  let component: Converter;
  let fixture: ComponentFixture<Converter>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Converter],
    });
    fixture = TestBed.createComponent(Converter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
