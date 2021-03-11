import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromPlanet from '../../../planets/store/reducers';
import {Planet} from '../../models/planet';
import * as featurePlanetActions from './../../store/action/planets.actions';


@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.css']
})
export class PlanetPageComponent implements OnInit {

  planets$: Observable<Planet[]>;

  constructor(private store: Store<fromPlanet.State>) {
    this.planets$ = this.store.pipe(select(fromPlanet.selectAllPlanets));
    this.store.dispatch(featurePlanetActions.LoadPlanets({}));
  }

  ngOnInit(): void {
  }

}
