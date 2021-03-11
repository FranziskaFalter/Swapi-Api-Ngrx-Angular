import {createAction, props} from '@ngrx/store';
import {FormGroupState} from 'ngrx-forms';
import {FilmForm} from '../reducers/film-form.reducer';

export const loadFilmForms = createAction(
  '[FilmForm] Load FilmForms'
);

export const loadFilmFormsSuccess = createAction(
  '[FilmForm] Load FilmForms Success',
  props<{ form: FormGroupState<FilmForm> }>()
);
export const saveFilmForm = createAction(
  '[FilmForm] Save FilmForm',
  props<{ formValue: FilmForm }>()
);

export const loadFilmFormsFailure = createAction(
  '[FilmForm] Load FilmForms Failure',
  props<{ error: any }>()
);
