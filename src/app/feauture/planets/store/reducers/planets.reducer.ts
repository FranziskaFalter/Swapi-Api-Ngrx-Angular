import {EntityAdapter, EntityState} from '@ngrx/entity/src/models';
import {createEntityAdapter} from '@ngrx/entity';
import {Planet} from '../../models/planet';
import {Action, createReducer, on} from '@ngrx/store';
import * as featurePlanetActions from './../action/planets.actions';

export interface PlanetState extends EntityState<any> {
}

export function sortByName(a: Planet, b: Planet): number {
  return a.name.localeCompare(b.name);
}

export const planetAdapter: EntityAdapter<Planet> = createEntityAdapter<any>({
  selectId: planets => {
    const array = planets.url.split('/');
    return array[array.length - 2];
  },
  sortComparer: sortByName
});

export const initialState: PlanetState = planetAdapter.getInitialState({});

const featurePlanetReducer = createReducer(
  initialState,
  on(featurePlanetActions.LoadPlanets, state => ({...state, isLoading: true})),
  on(featurePlanetActions.LoadPlanetsSuccess, (state, {planets}) => {
    return planetAdapter.setAll(planets, state);
  }),
  on(featurePlanetActions.LoadPlanetByIdSuccess, (state, {planet}) => {
    return planetAdapter.addOne(planet, state);
  }),
  on(featurePlanetActions.LoadPlanetsFailure, (state, {error}) => ({...state, error})),
);

export function reducer(state: PlanetState | undefined, action: Action) {
  return featurePlanetReducer(state, action);
}

export const getPlanetById = (id: string) => (state: PlanetState) => state.entities[id];
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = planetAdapter.getSelectors();
