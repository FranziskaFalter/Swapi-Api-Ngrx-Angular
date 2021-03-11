import {createAction, props} from '@ngrx/store';
import {Character} from '../../models/character';


export const LoadCharacters = createAction('[Characters] Load Characters', props<{ searchParam?: string }>());
export const LoadCharactersSuccess = createAction('[Characters] Load Characters Success', props<{ characters: Character [] }>());
export const LoadCharactersFailure = createAction('[Characters] Load Characters Failure', props<{ error: any }>());
export const LoadCharacterById = createAction('[Characters] Load Character By Id', props<{ id: string }>());
export const LoadCharacterByIdSuccess = createAction('[Characters] Load Character By Id Success', props<{ character: Character }>());
export const LoadCharacterByIdFailure = createAction('[Characters] Load Character By Id Failure', props<{ error: any }>());
