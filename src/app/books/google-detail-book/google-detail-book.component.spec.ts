import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDetailBookComponent } from './google-detail-book.component';

describe('GoogleDetailBookComponent', () => {
  let component: GoogleDetailBookComponent;
  let fixture: ComponentFixture<GoogleDetailBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleDetailBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleDetailBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
