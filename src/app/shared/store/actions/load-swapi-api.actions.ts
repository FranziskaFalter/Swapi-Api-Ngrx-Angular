import {createAction, props} from '@ngrx/store';

export const LoadVehiclesById = createAction(
  '[LoadSwapiApi] Load Vehicle By Id',
  props<{ id: string }>()
);

export const LoadVehiclesByIdSuccess = createAction(
  '[LoadSwapiApi] Load Vehicle By Id Success',
  props<{ data: any }>()
);

export const LoadVehiclesByIdFailure = createAction(
  '[LoadSwapiApi] Load Vehicle By Id Failure',
  props<{ error: any }>()
);

export const LoadSpeciesById = createAction(
  '[LoadSwapiApi] Load Species By Id',
  props<{ id: string }>()
);

export const LoadSpeciesByIdSuccess = createAction(
  '[LoadSwapiApi] Load Species By Id Success',
  props<{ data: any }>()
);

export const LoadSpeciesByIdFailure = createAction(
  '[LoadSwapiApi] Load Species By Id Failure',
  props<{ error: any }>()
);
export const LoadSpaceShipById = createAction(
  '[LoadSwapiApi] Load SpaceShip By Id',
  props<{ id: string }>()
);

export const LoadSpaceShipByIdSuccess = createAction(
  '[LoadSwapiApi] Load SpaceShip By Id Success',
  props<{ data: any }>()
);

export const LoadSpaceShipByIdFailure = createAction(
  '[LoadSwapiApi] Load SpaceShip By Id Failure',
  props<{ error: any }>()
);
