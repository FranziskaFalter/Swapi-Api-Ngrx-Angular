import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsPageComponent} from './containers/films-page/films-page.component';
import {FilmDetailsComponent} from './components/film-details/film-details.component';


const routes: Routes = [
  {path: 'film', component: FilmsPageComponent},
  {path: 'film/:id', component: FilmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {
}
