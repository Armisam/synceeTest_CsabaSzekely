import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLoggedinComponent } from './google-loggedin.component';

describe('GoogleLoggedinComponent', () => {
  let component: GoogleLoggedinComponent;
  let fixture: ComponentFixture<GoogleLoggedinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleLoggedinComponent]
    });
    fixture = TestBed.createComponent(GoogleLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
