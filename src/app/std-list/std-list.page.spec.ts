import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdListPage } from './std-list.page';

describe('StdListPage', () => {
  let component: StdListPage;
  let fixture: ComponentFixture<StdListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
