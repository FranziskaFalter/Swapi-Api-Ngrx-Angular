import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromSpecies from './swapi-species.reducers';
import {SpeciesState} from './swapi-species.reducers';
import * as fromSpaceShips from './swapi-space-ships.reducer';
import {SpaceShipState} from './swapi-space-ships.reducer';
import * as fromVehicles from './swapi-vehicles.reducer';
import {VehicleState} from './swapi-vehicles.reducer';

import * as fromRoot from './../../../reducers/index';

export interface SwapiApiState {
  vehicles: fromVehicles.VehicleState;
  spaceships: fromSpaceShips.SpaceShipState;
  species: fromSpecies.SpeciesState;
}

export interface State extends fromRoot.State {
  vehicles: VehicleState;
  spaceships: SpaceShipState;
  species: SpeciesState;
}

export const reducers: ActionReducerMap<SwapiApiState, any> = {
  vehicles: fromVehicles.reducer,
  spaceships: fromSpaceShips.reducer,
  species: fromSpecies.reducer,
};

export const selectSwapiApiState = createFeatureSelector<SwapiApiState>('swapiApi');

export const selectVehicles = createSelector(
  selectSwapiApiState,
  state => state.vehicles
);

export const selectSpecies = createSelector(
  selectSwapiApiState,
  state => state.species
);

export const selectSpaceships = createSelector(
  selectSwapiApiState,
  state => state.spaceships
);

export const selectAllSpecies = createSelector(
  selectSpecies,
  fromSpecies.selectAll
);

export const selectSpeciesById = (id: string) => createSelector(
  selectSpecies,
  fromSpecies.getSpeciesById(id)
);

export const selectAllVehicles = createSelector(
  selectVehicles,
  fromVehicles.selectAll
);

export const selectVehiclesById = (id: string) => createSelector(
  selectVehicles,
  fromVehicles.getVehicleById(id)
);


export const selectAllSpaceShips = createSelector(
  selectSpaceships,
  fromSpaceShips.selectAll
);

export const selectSpaceShipsById = (id: string) => createSelector(
  selectSpaceships,
  fromSpaceShips.getSpaceShipById(id)
);
