import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralnhcontatoComponent } from './coralnhcontato.component';

describe('CoralnhcontatoComponent', () => {
  let component: CoralnhcontatoComponent;
  let fixture: ComponentFixture<CoralnhcontatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoralnhcontatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoralnhcontatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
