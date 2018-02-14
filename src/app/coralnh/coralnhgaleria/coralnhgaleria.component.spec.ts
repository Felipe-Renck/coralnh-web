import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralnhgaleriaComponent } from './coralnhgaleria.component';

describe('CoralnhgaleriaComponent', () => {
  let component: CoralnhgaleriaComponent;
  let fixture: ComponentFixture<CoralnhgaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoralnhgaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoralnhgaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
