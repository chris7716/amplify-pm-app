import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingComponent } from './on-going.component';

describe('OnGoingComponent', () => {
  let component: OnGoingComponent;
  let fixture: ComponentFixture<OnGoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnGoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnGoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
