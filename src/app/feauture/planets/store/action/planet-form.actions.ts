import {createAction, props} from '@ngrx/store';
import {FormGroupState} from 'ngrx-forms';
import {PlanetForm} from '../reducers/planet-form.reducer';

export const loadPlanetForms = createAction(
  '[PlanetForm] Load PlanetForms'
);

export const loadPlanetFormsSuccess = createAction(
  '[PlanetForm] Load PlanetForms Success',
  props<{ form: FormGroupState<PlanetForm> }>()
);

export const savePlanetForm = createAction(
  '[PlanetForm] Save PlanetForm',
  props<{ formValue: PlanetForm }>()
);


export const loadPlanetFormsFailure = createAction(
  '[PlanetForm] Load PlanetForms Failure',
  props<{ error: any }>()
);
