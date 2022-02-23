import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishRateComponent } from './dish-rate.component';

describe('DishRateComponent', () => {
  let component: DishRateComponent;
  let fixture: ComponentFixture<DishRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
