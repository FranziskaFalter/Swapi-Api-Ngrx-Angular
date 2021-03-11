import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanetLinkListComponent} from './planet-link-list.component';

describe('PlanetLinkListComponent', () => {
  let component: PlanetLinkListComponent;
  let fixture: ComponentFixture<PlanetLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetLinkListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
