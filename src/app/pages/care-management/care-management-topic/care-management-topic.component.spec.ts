import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareManagementTopicComponent } from './care-management-topic.component';

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<CareManagementTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareManagementTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareManagementTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
