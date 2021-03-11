import {createAction, props} from '@ngrx/store';
import {Film} from '../../models/film';


export const LoadFilms = createAction('[Films] Load Films', props<{ searchParam?: string }>());
export const LoadFilmsSuccess = createAction('[Films] Load Films Success', props<{ films: Film [] }>());
export const LoadFilmsFailure = createAction('[Films] Load Films Failure', props<{ error: any }>());
export const LoadFilmById = createAction('[Characters] Load Film By Id', props<{ id: string }>());
export const LoadFilmByIdSuccess = createAction('[Films] Load Film By Id Success', props<{ film: Film }>());
export const LoadFilmyByIdFailure = createAction('[Films] Load Film By Id Failure', props<{ error: any }>());
