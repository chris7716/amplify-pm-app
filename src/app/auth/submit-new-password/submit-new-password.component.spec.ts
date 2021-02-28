import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitNewPasswordComponent } from './submit-new-password.component';

describe('SubmitNewPasswordComponent', () => {
  let component: SubmitNewPasswordComponent;
  let fixture: ComponentFixture<SubmitNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitNewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
