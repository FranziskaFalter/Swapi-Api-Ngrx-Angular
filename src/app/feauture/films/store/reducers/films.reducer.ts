import {Action, createReducer, on} from '@ngrx/store';
import {EntityAdapter, EntityState} from '@ngrx/entity/src/models';
import {createEntityAdapter} from '@ngrx/entity';
import {Film} from '../../models/film';
import * as featureFilmActions from './../action/films.actions';


export interface FilmState extends EntityState<any> {
}

export function sortById(a: Film, b: Film): number {
  return a.episode_id - b.episode_id;
}

export const filmAdapter: EntityAdapter<Film> = createEntityAdapter<any>({
  selectId: films => {
    const array = films.url.split('/');
    return array[array.length - 2];
  },
  sortComparer: sortById
});

export const initialState: FilmState = filmAdapter.getInitialState({});


const featureFilmReducer = createReducer(
  initialState,
  on(featureFilmActions.LoadFilms, state => ({...state, isLoading: true})),
  on(featureFilmActions.LoadFilmsSuccess, (state, {films}) => {
    return filmAdapter.setAll(films, state);
  }),
  on(featureFilmActions.LoadFilmByIdSuccess, (state, {film}) => {
    return filmAdapter.addOne(film, state);
  }),
  on(featureFilmActions.LoadFilmsFailure, (state, {error}) => ({...state, error})),
);

export function reducer(state: FilmState | undefined, action: Action) {
  return featureFilmReducer(state, action);
}


export const getFilmById = (id: string) => (state: FilmState) => state.entities[id];

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = filmAdapter.getSelectors();
