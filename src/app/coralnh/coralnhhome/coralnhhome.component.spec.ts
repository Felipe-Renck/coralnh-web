import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralnhhomeComponent } from './coralnhhome.component';

describe('CoralnhhomeComponent', () => {
  let component: CoralnhhomeComponent;
  let fixture: ComponentFixture<CoralnhhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoralnhhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoralnhhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
