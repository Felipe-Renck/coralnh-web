import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PainelComponent } from 'app/janovohamburgo/coralnh-sistema/sistema/painel/painel.component';

describe('PainelComponent', () => {
  let component: PainelComponent;
  let fixture: ComponentFixture<PainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
