import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {FilmsEffects} from './store/effects/films.effects';
import {ListComponent} from './components/film-card-list/list.component';
import {FilmsPageComponent} from './containers/films-page/films-page.component';
import {FilmsRoutingModule} from './films-routing.module';
import {reducers} from './store/reducers';
import {FilmsService} from './services/films.service';
import {SharedModule} from '../../shared/shared.module';
import {FilmDetailsComponent} from './components/film-details/film-details.component';
import {FilmCardComponent} from './components/film-card/film-card.component';
import {FilmFormComponent} from './components/film-form/film-form.component';
import {NgrxFormsModule} from 'ngrx-forms';


@NgModule({
  declarations: [ListComponent, FilmsPageComponent, FilmDetailsComponent, FilmCardComponent, FilmFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FilmsRoutingModule,
    StoreModule.forFeature(
      'films',
      reducers
    ),
    EffectsModule.forFeature([FilmsEffects]),
    NgrxFormsModule,
  ],
  providers: [FilmsService]
})
export class FilmsModule {
}
