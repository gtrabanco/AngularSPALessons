import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayhiComponent } from './sayhi.component';

describe('SayhiComponent', () => {
  let component: SayhiComponent;
  let fixture: ComponentFixture<SayhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
