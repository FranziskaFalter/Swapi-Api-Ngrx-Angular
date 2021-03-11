import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {LoadSwapiDataService} from '../../services/load-swapi-data.service';
import * as swapiFeatureActions from '../actions/load-swapi-api.actions';
import {of} from 'rxjs';


@Injectable()
export class LoadSwapiApiEffects {


  loadVehiclesById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(swapiFeatureActions.LoadVehiclesById),
      mergeMap((action) => {
        return this.loadSwapiData.getVehiclesById(action.id
        ).pipe(
          map((vehicle: any) => {
            return swapiFeatureActions.LoadVehiclesByIdSuccess({data: vehicle});
          }));
      }),
      catchError((error, caught) => {
        return of(swapiFeatureActions.LoadVehiclesByIdFailure({error}));
      }));
  });
  loadSpaceShipById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(swapiFeatureActions.LoadSpaceShipById),
      mergeMap((action) => {
        return this.loadSwapiData.getSpaceShipsById(action.id
        ).pipe(
          map((spaceship: any) => {
            return swapiFeatureActions.LoadSpaceShipByIdSuccess({data: spaceship});
          }));
      }),
      catchError((error, caught) => {
        return of(swapiFeatureActions.LoadSpaceShipByIdFailure({error}));
      }));
  });
  loadSpeciesById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(swapiFeatureActions.LoadSpeciesById),
      mergeMap((action) => {
        return this.loadSwapiData.getSpeciesById(action.id
        ).pipe(
          map((species: any) => {
            return swapiFeatureActions.LoadSpeciesByIdSuccess({data: species});
          }));
      }),
      catchError((error, caught) => {
        return of(swapiFeatureActions.LoadSpeciesByIdFailure({error}));
      }));
  });

  constructor(private actions$: Actions, private loadSwapiData: LoadSwapiDataService) {
  }

}
