import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header/header.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {LoadSwapiApiEffects} from './store/effects/load-swapi-api-effect.effects';
import {FilmLinkListComponent} from './components/film-link-list/film-link-list.component';
import {VehicleLinkListComponent} from './components/vehicle-link-list/vehicle-link-list.component';
import {SpaceshipLinkListComponent} from './components/spaceship-link-list/spaceship-link-list.component';
import {SpeciesLinkListComponent} from './components/species-link-list/species-link-list.component';
import {CharacterLinkListComponent} from './components/character-link-list/character-link-list.component';
import {PlanetLinkListComponent} from './components/planet-link-list/planet-link-list.component';


@NgModule({
  declarations: [HeaderComponent, HomeComponent, FilmLinkListComponent, VehicleLinkListComponent, SpaceshipLinkListComponent, SpeciesLinkListComponent, CharacterLinkListComponent, PlanetLinkListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    StoreModule.forFeature(
      'swapiApi',
      reducers
    ),
    EffectsModule.forFeature([LoadSwapiApiEffects]),
  ],
  exports: [HeaderComponent, FilmLinkListComponent, SpaceshipLinkListComponent, SpeciesLinkListComponent, VehicleLinkListComponent, CharacterLinkListComponent, PlanetLinkListComponent]
})
export class SharedModule {
}
