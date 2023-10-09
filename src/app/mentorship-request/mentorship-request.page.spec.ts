import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentorshipRequestPage } from './mentorship-request.page';

describe('MentorshipRequestPage', () => {
  let component: MentorshipRequestPage;
  let fixture: ComponentFixture<MentorshipRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MentorshipRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
