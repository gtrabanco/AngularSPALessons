import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadComponent } from './head.component';

describe('HeadComponent', () => {
  let component: HeadComponent;
  let fixture: ComponentFixture<HeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "Learning SPA"', () => {
    const fixture = TestBed.createComponent(HeadComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('h1').textContent).toEqual(fixture.componentInstance.title)
  })
});
