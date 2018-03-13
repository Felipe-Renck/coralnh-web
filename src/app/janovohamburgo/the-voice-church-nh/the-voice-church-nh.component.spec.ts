import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVoiceChurchNhComponent } from './the-voice-church-nh.component';

describe('TheVoiceChurchNhComponent', () => {
  let component: TheVoiceChurchNhComponent;
  let fixture: ComponentFixture<TheVoiceChurchNhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheVoiceChurchNhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheVoiceChurchNhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
