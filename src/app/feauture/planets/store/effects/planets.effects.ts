import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {PlanetService} from '../../services/planet-service.service';
import {Planet} from '../../models/planet';
import * as featurePlanetActions from './../action/planets.actions';
import {of} from 'rxjs';


@Injectable()
export class PlanetsEffects {


  loadPlanets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(featurePlanetActions.LoadPlanets),
      mergeMap((action) => {
        return this.planetService.getPlanets(action.searchParam ? action.searchParam : ''
        ).pipe(
          map((planets: Planet[]) => {
            return featurePlanetActions.LoadPlanetsSuccess({planets});
          }));
      }),
      catchError((error, caught) => {
        return of(featurePlanetActions.LoadPlanetsFailure({error}));
      }));
  });
  loadPlanetById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(featurePlanetActions.LoadPlanetById),
      mergeMap((action) => {
        return this.planetService.getPlanetById(action.id
        ).pipe(
          map((planet: Planet) => {
            return featurePlanetActions.LoadPlanetByIdSuccess({planet});
          }));
      }),
      catchError((error, caught) => {
        return of(featurePlanetActions.LoadPlanetByIdFailure({error}));
      }));
  });

  constructor(private actions$: Actions,
              private planetService: PlanetService) {
  }
}
