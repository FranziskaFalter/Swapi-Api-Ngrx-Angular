import {Action, createReducer, on} from '@ngrx/store';
import {EntityAdapter, EntityState} from '@ngrx/entity/src/models';
import {createEntityAdapter} from '@ngrx/entity';

import * as swapiFeatureActions from '../actions/load-swapi-api.actions';

export interface VehicleState extends EntityState<any> {
}


export const vehiclesAdapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: vehicles => {
    const array = vehicles.url.split('/');
    return array[array.length - 2];
  },
});

export const initialState: VehicleState = vehiclesAdapter.getInitialState({});


const featureVehiclesReducer = createReducer(
  initialState,
  on(swapiFeatureActions.LoadVehiclesById, state => ({...state, isLoading: true, errorMessage: null})),
  on(swapiFeatureActions.LoadVehiclesByIdSuccess, (state, {data}) => {
    return vehiclesAdapter.addOne(data, state);
  }),
  on(swapiFeatureActions.LoadVehiclesByIdFailure, (state, {error}) => ({...state, isLoading: false, error})),
);

export function reducer(state: VehicleState | undefined, action: Action) {
  return featureVehiclesReducer(state, action);
}


export const getVehicleById = (id: string) => (state: VehicleState) => state.entities[id];

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = vehiclesAdapter.getSelectors();
