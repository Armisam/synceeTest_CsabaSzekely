import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalLoggedinComponent } from './normal-loggedin.component';

describe('NormalLoggedinComponent', () => {
  let component: NormalLoggedinComponent;
  let fixture: ComponentFixture<NormalLoggedinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalLoggedinComponent]
    });
    fixture = TestBed.createComponent(NormalLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
