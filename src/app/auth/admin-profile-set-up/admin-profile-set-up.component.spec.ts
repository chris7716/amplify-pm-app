import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileSetUpComponent } from './admin-profile-set-up.component';

describe('AdminProfileSetUpComponent', () => {
  let component: AdminProfileSetUpComponent;
  let fixture: ComponentFixture<AdminProfileSetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfileSetUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
