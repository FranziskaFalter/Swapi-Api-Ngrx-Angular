import {createFormGroupState, FormGroupState, onNgrxForms, updateGroup, wrapReducerWithFormStateUpdate} from 'ngrx-forms';
import {createReducer, on} from '@ngrx/store';
import * as featurePlanetFormActions from './../action/planet-form.actions';


export interface PlanetForm {
  name: string;
  mass: string;
  height: string;
  hairColor: string;
  eyeColor: string;
  birthDate: string;
  gender: string;
}

export const FORM_ID = 'planet-form';

const initialFormState: PlanetForm = {
  name: 'string',
  mass: 'string',
  height: 'string',
  hairColor: 'string',
  eyeColor: 'string',
  birthDate: 'string',
  gender: 'string',
};

export interface PlanetFormState {
  formState: FormGroupState<PlanetForm>;
  submittedValue: PlanetForm | undefined;
}

const validationFormGroupReducer = updateGroup<PlanetForm>({});

const loginReducer = createReducer(
  {
    formState: createFormGroupState<PlanetForm>(FORM_ID, initialFormState),
    submittedValue: undefined
  },
  onNgrxForms(),
  on(featurePlanetFormActions.loadPlanetFormsSuccess, (state, {form}) => {
    return {...state, formState: form};
  })
);

export const reducers = wrapReducerWithFormStateUpdate(
  loginReducer,
  (state: PlanetFormState) => {
    return state.formState;
  },
  validationFormGroupReducer
);

export function reducer(s, a) {
  return reducers(s, a);
}
