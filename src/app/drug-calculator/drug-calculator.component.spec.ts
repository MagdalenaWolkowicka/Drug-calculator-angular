import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugCalculatorComponent } from './drug-calculator.component';

describe('DrugCalculatorComponent', () => {
  let component: DrugCalculatorComponent;
  let fixture: ComponentFixture<DrugCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
