import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsCardListComponent} from './component/planet-card-list/planets-card-list.component';
import {PlanetCardComponent} from './component/planet-card/planet-card.component';
import {PlanetPageComponent} from './containers/planet-page/planet-page.component';
import {PlanetsRoutingModule} from './planets-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {PlanetsEffects} from './store/effects/planets.effects';
import {PlanetDetailsComponent} from './component/planet-details/planet-details.component';
import {SharedModule} from '../../shared/shared.module';
import {PlanetFormComponent} from './component/planet-form/planet-form.component';
import {NgrxFormsModule} from 'ngrx-forms';


@NgModule({
  declarations: [PlanetsCardListComponent, PlanetCardComponent, PlanetPageComponent, PlanetDetailsComponent, PlanetFormComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    StoreModule.forFeature(
      'planets',
      reducers
    ),
    EffectsModule.forFeature([PlanetsEffects]),
    SharedModule,
    NgrxFormsModule,
  ]
})
export class PlanetsModule {
}
