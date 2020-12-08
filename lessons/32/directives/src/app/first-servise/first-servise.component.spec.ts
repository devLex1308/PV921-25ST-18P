import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstServiseComponent } from './first-servise.component';

describe('FirstServiseComponent', () => {
  let component: FirstServiseComponent;
  let fixture: ComponentFixture<FirstServiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstServiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstServiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
