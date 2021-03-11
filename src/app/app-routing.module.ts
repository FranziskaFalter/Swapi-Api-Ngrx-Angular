import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './reducers';
import {HomeComponent} from './shared/home/home.component';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [
    StoreRouterConnectingModule,
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [{
    provide:
    RouterStateSerializer, useClass: CustomSerializer
  }],
})
export class AppRoutingModule {
}
