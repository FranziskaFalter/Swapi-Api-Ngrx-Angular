import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as featureCharacterActions from './../action/characters.actions';
import {CharacterService} from '../../services/character.service';
import {Character} from '../../models/character';
import {of} from 'rxjs';


@Injectable()
export class CharactersEffects {


  loadCharacters$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(featureCharacterActions.LoadCharacters),
        mergeMap((action) => {
          return this.characterService.getCharacters(action.searchParam ? action.searchParam : ''
          ).pipe(
            map((characters: Character[]) => {
              return featureCharacterActions.LoadCharactersSuccess({characters});
            }));
        }),
        catchError((error, caught) => {
          return of(featureCharacterActions.LoadCharactersFailure({error}));
        }));
    }
  )
  ;
  loadCharactersById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(featureCharacterActions.LoadCharacterById),
      mergeMap((action) => {
        return this.characterService.getCharacterById(action.id
        ).pipe(
          map((character: Character) => {
            return featureCharacterActions.LoadCharacterByIdSuccess({character});
          }));
      }),
      catchError((error, caught) => {
        return of(featureCharacterActions.LoadCharacterByIdFailure({error}));
      }));
  });

  constructor(private actions$: Actions,
              private characterService: CharacterService) {
  }
}
