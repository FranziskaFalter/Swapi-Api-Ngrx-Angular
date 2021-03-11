import {createFormGroupState, FormGroupState, onNgrxForms, updateGroup, wrapReducerWithFormStateUpdate} from 'ngrx-forms';
import {createReducer, on} from '@ngrx/store';
import * as featureCharacterFormActions from './../action/character-form.actions';


export interface CharacterForm {
  name: string;
  mass: string;
  height: string;
  hairColor: string;
  eyeColor: string;
  birthDate: string;
  gender: string;
}

export const FORM_ID = 'character-form';

const initialFormState: CharacterForm = {
  name: '',
  mass: '',
  height: '',
  hairColor: '',
  eyeColor: '',
  birthDate: '',
  gender: '',
};

export interface CharacterFormState {
  formState: FormGroupState<CharacterForm>;
  submittedValue: CharacterForm | undefined;
}

const validationFormGroupReducer = updateGroup<CharacterForm>({});

const loginReducer = createReducer(
  {
    formState: createFormGroupState<CharacterForm>(FORM_ID, initialFormState),
    submittedValue: undefined
  },
  onNgrxForms(),
  on(featureCharacterFormActions.loadCharacterFormsSuccess, (state, {form}) => {
    return {...state, formState: form};
  })
);

export const reducers = wrapReducerWithFormStateUpdate(
  loginReducer,
  (state: CharacterFormState) => {
    return state.formState;
  },
  validationFormGroupReducer
);

export function reducer(s, a) {
  return reducers(s, a);
}
