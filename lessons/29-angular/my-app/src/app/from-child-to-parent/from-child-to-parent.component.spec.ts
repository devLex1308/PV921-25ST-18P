import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromChildToParentComponent } from './from-child-to-parent.component';

describe('FromChildToParentComponent', () => {
  let component: FromChildToParentComponent;
  let fixture: ComponentFixture<FromChildToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromChildToParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromChildToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
