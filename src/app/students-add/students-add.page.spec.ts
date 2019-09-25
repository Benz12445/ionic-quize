import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAddPage } from './students-add.page';

describe('StudentsAddPage', () => {
  let component: StudentsAddPage;
  let fixture: ComponentFixture<StudentsAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
