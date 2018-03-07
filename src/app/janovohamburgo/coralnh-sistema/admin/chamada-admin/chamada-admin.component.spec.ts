import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaAdminComponent } from './chamada-admin.component';

describe('ChamadaAdminComponent', () => {
  let component: ChamadaAdminComponent;
  let fixture: ComponentFixture<ChamadaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
