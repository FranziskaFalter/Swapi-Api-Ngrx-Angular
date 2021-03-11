import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromFilms from './films.reducer';
import * as fromFilmForm from './film-form.reducer';
import {FilmFormState} from './film-form.reducer';
import * as fromRoot from './../../../../reducers/index';

export interface FilmsState {
  films: fromFilms.FilmState;
  filmForm: fromFilmForm.FilmFormState;
}

export interface State extends fromRoot.State {
  films: FilmsState;
  filmForm: FilmFormState;
}

export const reducers: ActionReducerMap<FilmsState, any> = {
  films: fromFilms.reducer,
  filmForm: fromFilmForm.reducer
};

export const selectFilmState = createFeatureSelector<FilmsState>('films');

export const selectFilms = createSelector(
  selectFilmState,
  state => state.films
);
export const selectFilmForm = createSelector(
  selectFilmState,
  state => state.filmForm.formState
);


export const selectAllFilms = createSelector(
  selectFilms,
  fromFilms.selectAll
);

export const selectFilmById = (id: string) => createSelector(
  selectFilms,
  fromFilms.getFilmById(id)
);
