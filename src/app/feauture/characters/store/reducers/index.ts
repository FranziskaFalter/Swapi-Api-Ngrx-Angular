import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCharacter from './characters.reducer';
import {CharacterState} from './characters.reducer';
import * as fromCharacterForm from './character-form.reducer';
import * as fromRoot from './../../../../reducers/index';


export interface CharactersState {
  character: fromCharacter.CharacterState;
  characterForm: fromCharacterForm.CharacterFormState;
}

export interface State extends fromRoot.State {
  character: CharacterState;
}

export const reducers: ActionReducerMap<CharactersState, any> = {
  character: fromCharacter.reducer,
  characterForm: fromCharacterForm.reducer
};

export const selectCharactersState = createFeatureSelector<CharactersState>('characters');

export const selectCharacters = createSelector(
  selectCharactersState,
  state => state.character
);

export const selectCharacterForm = createSelector(
  selectCharactersState,
  state => state.characterForm.formState
);


export const selectAllCharacters = createSelector(
  selectCharacters,
  fromCharacter.selectAll
);

export const selectCharacterById = (id: string) => createSelector(
  selectCharacters,
  fromCharacter.getCharacterById(id)
);

