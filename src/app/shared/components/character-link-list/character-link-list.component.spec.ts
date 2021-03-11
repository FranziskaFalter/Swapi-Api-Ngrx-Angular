import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterLinkListComponent} from './character-link-list.component';

describe('CharacterLinkListComponent', () => {
  let component: CharacterLinkListComponent;
  let fixture: ComponentFixture<CharacterLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterLinkListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
