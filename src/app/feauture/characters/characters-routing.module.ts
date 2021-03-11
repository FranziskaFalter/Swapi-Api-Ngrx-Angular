import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterPageComponent} from './containers/character-page/character-page.component';
import {CharacterDetailsComponent} from './component/character-details/character-details.component';


const routes: Routes = [
  {path: 'character', component: CharacterPageComponent},
  {path: 'character/:id', component: CharacterDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {
}
