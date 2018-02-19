import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfulSubmissionComponent } from './sucessful-submission.component';

describe('SucessfulSubmissionComponent', () => {
  let component: SucessfulSubmissionComponent;
  let fixture: ComponentFixture<SucessfulSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessfulSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfulSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
