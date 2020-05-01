import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleListBooksComponent } from './google-list-books.component';

describe('GoogleListBooksComponent', () => {
  let component: GoogleListBooksComponent;
  let fixture: ComponentFixture<GoogleListBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleListBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
