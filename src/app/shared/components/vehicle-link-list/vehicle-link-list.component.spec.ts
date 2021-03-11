import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VehicleLinkListComponent} from './vehicle-link-list.component';

describe('VehicleLinkListComponent', () => {
  let component: VehicleLinkListComponent;
  let fixture: ComponentFixture<VehicleLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleLinkListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
