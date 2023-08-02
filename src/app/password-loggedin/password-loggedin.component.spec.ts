import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLoggedinComponent } from './password-loggedin.component';

describe('PasswordLoggedinComponent', () => {
  let component: PasswordLoggedinComponent;
  let fixture: ComponentFixture<PasswordLoggedinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordLoggedinComponent]
    });
    fixture = TestBed.createComponent(PasswordLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
