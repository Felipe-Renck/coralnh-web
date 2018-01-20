import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralnhcalendarioComponent } from './coralnhcalendario.component';

describe('CoralnhcalendarioComponent', () => {
  let component: CoralnhcalendarioComponent;
  let fixture: ComponentFixture<CoralnhcalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoralnhcalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoralnhcalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
