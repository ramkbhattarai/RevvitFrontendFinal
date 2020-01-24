import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevvitComponent } from './revvit.component';

describe('RevvitComponent', () => {
  let component: RevvitComponent;
  let fixture: ComponentFixture<RevvitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevvitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevvitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
