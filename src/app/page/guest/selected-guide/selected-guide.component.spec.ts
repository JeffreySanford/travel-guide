import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedGuideComponent } from './selected-guide.component';

describe('SelectedGuideComponent', () => {
  let component: SelectedGuideComponent;
  let fixture: ComponentFixture<SelectedGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
