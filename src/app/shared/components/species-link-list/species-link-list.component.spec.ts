import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpeciesLinkListComponent} from './species-link-list.component';

describe('SpeciesLinkListComponent', () => {
  let component: SpeciesLinkListComponent;
  let fixture: ComponentFixture<SpeciesLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeciesLinkListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
