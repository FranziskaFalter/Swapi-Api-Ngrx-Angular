import {Action, createReducer, on} from '@ngrx/store';
import {EntityAdapter, EntityState} from '@ngrx/entity/src/models';
import {createEntityAdapter} from '@ngrx/entity';

import * as swapiFeatureActions from '../actions/load-swapi-api.actions';

export interface SpeciesState extends EntityState<any> {
}


export const speciesAdapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: species => {
    const array = species.url.split('/');
    return array[array.length - 2];
  },
});

export const initialState: SpeciesState = speciesAdapter.getInitialState({});


const featureVehiclesReducer = createReducer(
  initialState,
  on(swapiFeatureActions.LoadSpeciesById, state => ({...state, isLoading: true, errorMessage: null})),
  on(swapiFeatureActions.LoadSpeciesByIdSuccess, (state, {data}) => {
    return speciesAdapter.addOne(data, state);
  }),
  on(swapiFeatureActions.LoadSpeciesByIdFailure, (state, {error}) => ({...state, isLoading: false, error})),
);

export function reducer(state: SpeciesState | undefined, action: Action) {
  return featureVehiclesReducer(state, action);
}


export const getSpeciesById = (id: string) => (state: SpeciesState) => state.entities[id];

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = speciesAdapter.getSelectors();
