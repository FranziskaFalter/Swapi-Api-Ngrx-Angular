import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpaceshipLinkListComponent} from './spaceship-link-list.component';

describe('SpaceshipLinkListComponent', () => {
  let component: SpaceshipLinkListComponent;
  let fixture: ComponentFixture<SpaceshipLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceshipLinkListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
