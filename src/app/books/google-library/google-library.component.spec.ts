import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLibraryComponent } from './google-library.component';

describe('GoogleLibraryComponent', () => {
  let component: GoogleLibraryComponent;
  let fixture: ComponentFixture<GoogleLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
