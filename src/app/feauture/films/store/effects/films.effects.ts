import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {FilmsService} from '../../services/films.service';
import {Film} from '../../models/film';
import * as featureFilmActions from './../action/films.actions';
import {of} from 'rxjs';

@Injectable()
export class FilmsEffects {


  loadFilms$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(featureFilmActions.LoadFilms),
      mergeMap((action) => {
        return this.filmService.getFilms(action.searchParam ? action.searchParam : ''
        ).pipe(
          map((films: Film[]) => {
            return featureFilmActions.LoadFilmsSuccess({films});
          }));
      }),
      catchError((error, caught) => {
        return of(featureFilmActions.LoadFilmsFailure({error}));
      }));
  });
  loadFilmById$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(featureFilmActions.LoadFilmById),
        mergeMap((action) => {
          return this.filmService.getFilmById(action.id
          ).pipe(
            map((film: Film) => {
              return featureFilmActions.LoadFilmByIdSuccess({film});
            }));
        }),
        catchError((error, caught) => {
          return of(featureFilmActions.LoadFilmyByIdFailure({error}));
        }));
    }
  );

  constructor(private actions$: Actions,
              private filmService: FilmsService) {
  }
}
