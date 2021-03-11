import {Component, Input, OnInit} from '@angular/core';
import * as fromPlanet from '../../../feauture/planets/store/reducers';
import {distinctUntilChanged, filter, map, take} from 'rxjs/operators';
import {Planet} from '../../../feauture/planets/models/planet';
import {LoadingService} from '../../services/loading.service';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-planet-link-list',
  templateUrl: './planet-link-list.component.html',
  styleUrls: ['./planet-link-list.component.css']
})
export class PlanetLinkListComponent implements OnInit {


  @Input() arrayOfPlanets: string[];

  constructor(public loadingService: LoadingService, private store: Store<fromRoot.RouterStateUrl>) {
  }

  ngOnInit(): void {
  }

  getPlanetName(planetUrl): Observable<string> {
    return this.store.pipe(
      select(fromPlanet.selectPlanetById(this.loadingService.split(planetUrl))),
      take(1),
      distinctUntilChanged(),
      filter(planet => planet !== undefined),
      map((planet: Planet) => planet.name
      ));
  }

}
