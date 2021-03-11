import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {filter, map, mergeMap, take, toArray} from 'rxjs/operators';
import {Film} from '../../feauture/films/models/film';
import * as fromCharacter from '../../feauture/characters/store/reducers';
import * as fromPlanet from '../../feauture/planets/store/reducers';
import * as fromFilm from '../../feauture/films/store/reducers';
import {Character} from '../../feauture/characters/models/character';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Planet} from '../../feauture/planets/models/planet';
import * as swapiFeatureActions from '../../shared/store/actions/load-swapi-api.actions';
import * as fromSwapiApi from './../store/reducers/';
import * as featureCharacterActions from '../../feauture/characters/store/action/characters.actions';
import * as featureFilmActions from './../../feauture/films/store/action/films.actions';
import * as featurePlanetActions from './../../feauture/planets/store/action/planets.actions';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  film: Film;
  arrayOfCharacters: string[];

  constructor(private store: Store<fromRoot.RouterStateUrl>) {
  }

  init(arrayOfPlanets?: string[], arrayOfFilms?: string[], arrayOfCharacters?: string[],
       arrayOfVehicles?: string[], arrayOfSpaceships?: string[],
       arrayOfSpecies?: string[]): void {
    if (arrayOfPlanets) {
      this.getNameOfPlanets(arrayOfPlanets).pipe(take(1)).subscribe();
    }
    if (arrayOfCharacters) {
      this.getNameOfCharacters(arrayOfCharacters).pipe(take(1)).subscribe();
    }
    if (arrayOfFilms) {
      this.getNameOfFilms(arrayOfFilms).pipe(take(1)).subscribe();
    }
    if (arrayOfVehicles) {
      this.getNameOfVehicles(arrayOfVehicles).pipe(take(1)).subscribe();
    }
    if (arrayOfSpaceships) {
      this.getNameOfSpaceShips(arrayOfSpaceships).pipe(take(1)).subscribe();
    }
    if (arrayOfSpecies) {
      this.getNameOfSpecies(arrayOfSpecies).pipe(take(1)).subscribe();
    }

  }

  split(urlString: string): string {
    if (urlString) {
      const array = urlString.split('/');
      return array[array.length - 2];
    }
  }

  getNameOfCharacters(arrayOfCharacters: string[]): Observable<void[]> {
    return of(arrayOfCharacters).pipe(
      mergeMap(() => arrayOfCharacters),
      mergeMap((characterUrl) => {
        return this.store.select(fromCharacter.selectCharacterById(this.split(characterUrl))).pipe(
          take(1),
          filter((character) => character === undefined),
          map((character: Character) => {
              this.store.dispatch(featureCharacterActions.LoadCharacterById({id: this.split(characterUrl)}));
            }
          ));
      }),
      toArray()
    );
  }

  getNameOfFilms(arrayOfFilms: string[]): Observable<void[]> {
    return of(arrayOfFilms).pipe(
      mergeMap(() => arrayOfFilms),
      mergeMap((filmUrl) => {
        return this.store.select(fromFilm.selectFilmById(this.split(filmUrl))).pipe(
          take(1),
          filter((film) => film === undefined),
          map((film: Film) => {
              this.store.dispatch(featureFilmActions.LoadFilmById({id: this.split(filmUrl)}));
            }
          ));
      }),
      toArray()
    );
  }

  getNameOfPlanets(arrayOfPlanets: string[]): Observable<void[]> {
    return of(arrayOfPlanets).pipe(
      mergeMap(() => arrayOfPlanets),
      mergeMap((planetUrl) => {
        return this.store.select(fromPlanet.selectPlanetById(this.split(planetUrl))).pipe(
          take(1),
          filter((planet) => planet === undefined),
          map((planet: Planet) => {
              this.store.dispatch(featurePlanetActions.LoadPlanetById({id: this.split(planetUrl)}));
            }
          ));
      }),
      toArray()
    );
  }

  getNameOfVehicles(arrayOfVehicles: string[]): Observable<void[]> {
    return of(arrayOfVehicles).pipe(
      mergeMap(() => arrayOfVehicles),
      mergeMap((vehiclesUrl) => {
        return this.store.select(fromSwapiApi.selectVehiclesById(this.split(vehiclesUrl))).pipe(
          take(1),
          filter((vehicles) => vehicles === undefined),
          map((vehicles: any) => {
              this.store.dispatch(swapiFeatureActions.LoadVehiclesById({id: this.split(vehiclesUrl)}));
            }
          ));
      }),
      toArray()
    );
  }

  getNameOfSpecies(arrayOfSpecies: string[]): Observable<void[]> {
    return of(arrayOfSpecies).pipe(
      mergeMap(() => arrayOfSpecies),
      mergeMap((speciesUrl) => {
        return this.store.select(fromSwapiApi.selectSpeciesById(this.split(speciesUrl))).pipe(
          take(1),
          filter((species) => species === undefined),
          map((species: any) => {
              this.store.dispatch(swapiFeatureActions.LoadSpeciesById({id: this.split(speciesUrl)}));
            }
          ));
      }),
      toArray()
    );
  }

  getNameOfSpaceShips(arrayOfSpaceShips: string[]): Observable<void[]> {
    return of(arrayOfSpaceShips).pipe(
      mergeMap(() => arrayOfSpaceShips),
      mergeMap((spaceshipUrl) => {
        return this.store.select(fromSwapiApi.selectSpaceShipsById(this.split(spaceshipUrl))).pipe(
          take(1),
          filter((spaceship) => spaceship === undefined),
          map((spaceship: any) => {
              this.store.dispatch(swapiFeatureActions.LoadSpaceShipById({id: this.split(spaceshipUrl)}));
            }
          ));
      }),
      toArray()
    );
  }

}
