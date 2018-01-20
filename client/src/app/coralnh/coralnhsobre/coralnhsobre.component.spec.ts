import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralnhsobreComponent } from './coralnhsobre.component';

describe('CoralnhsobreComponent', () => {
  let component: CoralnhsobreComponent;
  let fixture: ComponentFixture<CoralnhsobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoralnhsobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoralnhsobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
