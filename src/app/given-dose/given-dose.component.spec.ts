import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivenDoseComponent } from './given-dose.component';

describe('GivenDoseComponent', () => {
  let component: GivenDoseComponent;
  let fixture: ComponentFixture<GivenDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivenDoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GivenDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
