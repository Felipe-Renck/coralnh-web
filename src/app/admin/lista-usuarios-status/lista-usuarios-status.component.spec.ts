import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuariosStatusComponent } from './lista-usuarios-status.component';

describe('ListaUsuariosStatusComponent', () => {
  let component: ListaUsuariosStatusComponent;
  let fixture: ComponentFixture<ListaUsuariosStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuariosStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuariosStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
