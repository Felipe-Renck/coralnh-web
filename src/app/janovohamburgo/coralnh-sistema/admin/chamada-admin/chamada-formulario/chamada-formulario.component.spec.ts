import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaFormularioComponent } from './chamada-formulario.component';

describe('ChamadaFormularioComponent', () => {
  let component: ChamadaFormularioComponent;
  let fixture: ComponentFixture<ChamadaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
