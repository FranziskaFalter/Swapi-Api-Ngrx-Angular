import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPlanet from './planets.reducer';
import * as fromPlanetForm from './planet-form.reducer';
import {PlanetFormState} from './planet-form.reducer';
import * as fromRoot from './../../../../reducers/index';


export interface PlanetsState {
  planets: fromPlanet.PlanetState;
  planetForm: fromPlanetForm.PlanetFormState;
}

export interface State extends fromRoot.State {
  planets: PlanetsState;
  planetForm: PlanetFormState;
}

export const reducers: ActionReducerMap<PlanetsState, any> = {
  planets: fromPlanet.reducer,
  planetForm: fromPlanetForm.reducer
};

export const selectPlanetState = createFeatureSelector<PlanetsState>('planets');

export const selectPlanets = createSelector(
  selectPlanetState,
  state => state.planets
);

export const selectPlanetForm = createSelector(
  selectPlanetState,
  state => state.planetForm.formState
);

export const selectAllPlanets = createSelector(
  selectPlanets,
  fromPlanet.selectAll
);

export const selectPlanetById = (id: string) => createSelector(
  selectPlanets,
  fromPlanet.getPlanetById(id)
);


