import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanetPageComponent} from './containers/planet-page/planet-page.component';
import {PlanetDetailsComponent} from './component/planet-details/planet-details.component';


const routes: Routes = [
  {path: 'planet', component: PlanetPageComponent},
  {path: 'planet/:id', component: PlanetDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {
}
