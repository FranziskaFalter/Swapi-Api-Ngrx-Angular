import {createAction, props} from '@ngrx/store';
import {CharacterForm} from '../reducers/character-form.reducer';
import {FormGroupState} from 'ngrx-forms';

export const loadCharacterForms = createAction(
  '[CharacterForm] Load CharacterForms'
);

export const loadCharacterFormsSuccess = createAction(
  '[CharacterForm] Load CharacterForms Success',
  props<{ form: FormGroupState<CharacterForm> }>()
);

export const saveCharacterForm = createAction(
  '[CharacterForm] Save CharacterForm ',
  props<{ formValue: CharacterForm }>()
);

export const loadCharacterFormsFailure = createAction(
  '[CharacterForm] Load CharacterForms Failure',
  props<{ error: any }>()
);
