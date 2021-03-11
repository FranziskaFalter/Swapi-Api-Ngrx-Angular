import {createAction, props} from '@ngrx/store';
import {Planet} from '../../models/planet';

export const LoadPlanets = createAction('[Planets] Load Planets', props<{ searchParam?: string }>());
export const LoadPlanetsSuccess = createAction('[Planets] Load Planets Success', props<{ planets: Planet [] }>());
export const LoadPlanetsFailure = createAction('[Planets] Load Planets Failure', props<{ error: any }>());
export const LoadPlanetById = createAction('[Planets] Load Planet By Id', props<{ id: string }>());
export const LoadPlanetByIdSuccess = createAction('[Planets] Load Planet By Id Success', props<{ planet: Planet }>());
export const LoadPlanetByIdFailure = createAction('[Planets] Load Planet By Id Failure', props<{ error: any }>());
