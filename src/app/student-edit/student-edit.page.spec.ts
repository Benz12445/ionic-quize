import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditPage } from './student-edit.page';

describe('StudentEditPage', () => {
  let component: StudentEditPage;
  let fixture: ComponentFixture<StudentEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
