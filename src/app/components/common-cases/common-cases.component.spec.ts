import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCasesComponent } from './common-cases.component';

describe('CommonCasesComponent', () => {
  let component: CommonCasesComponent;
  let fixture: ComponentFixture<CommonCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
