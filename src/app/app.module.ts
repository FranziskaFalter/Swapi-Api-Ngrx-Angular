import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterModule} from '@angular/router';
import {metaReducers, reducers} from './reducers';
import {AppRoutingModule} from './app-routing.module';
import {FilmsRoutingModule} from './feauture/films/films-routing.module';
import {FilmsModule} from './feauture/films/films.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CharacterModule} from './feauture/characters/character.module';
import {CharactersRoutingModule} from './feauture/characters/characters-routing.module';
import {PlanetsModule} from './feauture/planets/planets.module';
import {PlanetsRoutingModule} from './feauture/planets/planets-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FilmsRoutingModule,
    FilmsModule,
    CharacterModule,
    CharactersRoutingModule, PlanetsModule, PlanetsRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
