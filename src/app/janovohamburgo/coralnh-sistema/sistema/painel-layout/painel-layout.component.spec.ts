import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelLayoutComponent } from './painel-layout.component';

describe('PainelLayoutComponent', () => {
  let component: PainelLayoutComponent;
  let fixture: ComponentFixture<PainelLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
