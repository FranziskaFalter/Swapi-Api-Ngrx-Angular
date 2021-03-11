import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanetsCardListComponent} from './planets-card-list.component';

describe('PlanetsCardListComponent', () => {
  let component: PlanetsCardListComponent;
  let fixture: ComponentFixture<PlanetsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetsCardListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
