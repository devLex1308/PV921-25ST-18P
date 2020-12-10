import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExapmleComponent } from './exapmle.component';

describe('ExapmleComponent', () => {
  let component: ExapmleComponent;
  let fixture: ComponentFixture<ExapmleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExapmleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExapmleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
