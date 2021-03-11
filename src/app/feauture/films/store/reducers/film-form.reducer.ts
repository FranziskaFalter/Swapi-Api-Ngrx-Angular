import {createFormGroupState, FormGroupState, onNgrxForms, updateGroup, wrapReducerWithFormStateUpdate} from 'ngrx-forms';
import {createReducer, on} from '@ngrx/store';
import * as featureFilmFormActions from './../action/film-form.actions';


export interface FilmForm {
  title: string;
  director: string;
  producer: string;
  releaseDate: string;
  description: string;
}

export const FORM_ID = 'film-form';

const initialFormState: FilmForm = {
  title: '',
  director: '',
  producer: 'George Lucas',
  releaseDate: '',
  description: '',
};

export interface FilmFormState {
  formState: FormGroupState<FilmForm>;
  submittedValue: FilmForm | undefined;
}

const validationFormGroupReducer = updateGroup<FilmForm>({});

const loginReducer = createReducer(
  {
    formState: createFormGroupState<FilmForm>(FORM_ID, initialFormState),
    submittedValue: undefined
  },
  onNgrxForms(),
  on(featureFilmFormActions.loadFilmFormsSuccess, (state, {form}) => {
    return {...state, formState: form};
  })
);

export const reducers = wrapReducerWithFormStateUpdate(
  loginReducer,
  (state: FilmFormState) => {
    return state.formState;
  },
  validationFormGroupReducer
);

export function reducer(s, a) {
  return reducers(s, a);
}
