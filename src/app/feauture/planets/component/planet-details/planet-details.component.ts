import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../../reducers';
import * as fromPlanet from './../../../planets/store/reducers';
import {Planet} from '../../models/planet';
import {filter, map, take} from 'rxjs/operators';
import {LoadingService} from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit, OnDestroy {
  planet: Planet;
  subscriptions: { [key: string]: any } = {};
  film: string;
  character: string;
  arrayOfFilms: string[];
  arrayOfCharacters: string[];

  constructor(private store: Store<fromRoot.RouterStateUrl>,
              private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.subscriptions.routerSelector = this.store
      .pipe(take(1),
        select(fromRoot.getCurrentRouteState))
      .subscribe((route) => {
        this.getPlanet(route.firstChild.params.id);
      });
  }

  getPlanet(planetId): void {
    this.store.select(fromPlanet.selectPlanetById(planetId)).pipe(
      take(1),
      filter(planet => planet !== undefined),
      map((planet: Planet) => {
        this.planet = planet;
        this.loadingService.init(undefined, planet.films, planet.residents);
      })).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.routerSelector.unsubscribe();
  }
}
