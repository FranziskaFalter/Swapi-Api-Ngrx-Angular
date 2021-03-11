import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FilmLinkListComponent} from './film-link-list.component';

describe('FilmLinkListComponent', () => {
  let component: FilmLinkListComponent;
  let fixture: ComponentFixture<FilmLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmLinkListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
