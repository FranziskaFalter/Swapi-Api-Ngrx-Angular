import {Action, createReducer, on} from '@ngrx/store';
import {EntityAdapter, EntityState} from '@ngrx/entity/src/models';
import {createEntityAdapter} from '@ngrx/entity';

import * as swapiFeatureActions from '../actions/load-swapi-api.actions';

export interface SpaceShipState extends EntityState<any> {
}


export const spaceshipAdapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: spaceship => {
    const array = spaceship.url.split('/');
    return array[array.length - 2];
  },
});

export const initialState: SpaceShipState = spaceshipAdapter.getInitialState({});


const featureVehiclesReducer = createReducer(
  initialState,
  on(swapiFeatureActions.LoadSpaceShipById, state => ({...state, isLoading: true, errorMessage: null})),
  on(swapiFeatureActions.LoadSpaceShipByIdSuccess, (state, {data}) => {
    return spaceshipAdapter.addOne(data, state);
  }),
  on(swapiFeatureActions.LoadSpaceShipByIdFailure, (state, {error}) => ({...state, isLoading: false, error})),
);

export function reducer(state: SpaceShipState | undefined, action: Action) {
  return featureVehiclesReducer(state, action);
}


export const getSpaceShipById = (id: string) => (state: SpaceShipState) => state.entities[id];

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = spaceshipAdapter.getSelectors();
