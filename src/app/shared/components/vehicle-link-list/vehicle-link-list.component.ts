import {Component, Input, OnInit} from '@angular/core';
import {LoadingService} from '../../services/loading.service';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromSwapiApi from '../../store/reducers';
import {distinctUntilChanged, map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-vehicle-link-list',
  templateUrl: './vehicle-link-list.component.html',
  styleUrls: ['./vehicle-link-list.component.css']
})
export class VehicleLinkListComponent implements OnInit {
  @Input() arrayOfVehicles: string[];

  constructor(public loadingService: LoadingService, private store: Store<fromRoot.RouterStateUrl>) {
  }

  ngOnInit(): void {
  }


  getVehiclesName(vehiclesUrl): Observable<string> {
    return this.store.pipe(
      select(fromSwapiApi.selectVehiclesById(this.loadingService.split(vehiclesUrl))),
      take(1),
      distinctUntilChanged(),
      map((vehicles: any) => {
          if (vehicles) {
            return vehicles.name;
          }
        }
      ));
  }
}
