/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JanovohamburgoComponent } from './janovohamburgo.component';

describe('JanovohamburgoComponent', () => {
  let component: JanovohamburgoComponent;
  let fixture: ComponentFixture<JanovohamburgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanovohamburgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanovohamburgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
