import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterCardListComponent} from './component/character-card-list/character-card-list.component';
import {CharacterCardComponent} from './component/character-card/character-card.component';
import {CharacterPageComponent} from './containers/character-page/character-page.component';
import {StoreModule} from '@ngrx/store';

import {EffectsModule} from '@ngrx/effects';
import {CharactersEffects} from './store/effects/characters.effects';
import {reducers} from './store/reducers';
import {CharactersRoutingModule} from './characters-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CharacterDetailsComponent} from './component/character-details/character-details.component';
import {PlanetsModule} from '../planets/planets.module';
import {FilmsModule} from '../films/films.module';
import {CharacterFormComponent} from './component/character-form/character-form.component';
import {NgrxFormsModule} from 'ngrx-forms';


@NgModule({
  declarations: [CharacterCardListComponent,
    CharacterCardComponent, CharacterPageComponent, CharacterDetailsComponent, CharacterFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule,
    StoreModule.forFeature(
      'characters',
      reducers
    ),
    EffectsModule.forFeature([CharactersEffects]),
    PlanetsModule,
    FilmsModule,
    NgrxFormsModule,
  ]
})
export class CharacterModule {
}
