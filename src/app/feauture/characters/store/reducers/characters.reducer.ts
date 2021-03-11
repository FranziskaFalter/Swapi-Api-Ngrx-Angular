import {EntityAdapter, EntityState} from '@ngrx/entity/src/models';
import {Character} from '../../models/character';
import {createEntityAdapter} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';
import * as featureCharacterActions from './../action/characters.actions';

export interface CharacterState extends EntityState<any> {
}

export function sortByName(a: Character, b: Character): number {
  return a.name.localeCompare(b.name);
}

export const characterAdapter: EntityAdapter<Character> = createEntityAdapter<any>({
  selectId: characters => {
    const array = characters.url.split('/');
    return array[array.length - 2];
  },
  sortComparer: sortByName
});

export const initialState: CharacterState = characterAdapter.getInitialState({});

const featureCharacterReducer = createReducer(
  initialState,
  on(featureCharacterActions.LoadCharacters, state => ({...state, isLoading: true})),
  on(featureCharacterActions.LoadCharactersSuccess, (state, {characters}) => {
    return characterAdapter.setAll(characters, state);
  }),
  on(featureCharacterActions.LoadCharacterByIdSuccess, (state, {character}) => {
    return characterAdapter.addOne(character, state);
  }),
  on(featureCharacterActions.LoadCharactersFailure, (state, {error}) => ({...state, error})),
);

export function reducer(state: CharacterState | undefined, action: Action) {
  return featureCharacterReducer(state, action);
}

export const getCharacterById = (id: string) => (state: CharacterState) => state.entities[id];
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = characterAdapter.getSelectors();
