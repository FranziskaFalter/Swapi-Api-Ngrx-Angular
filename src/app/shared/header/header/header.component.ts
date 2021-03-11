import {Component, OnInit} from '@angular/core';
import {debounceTime, take} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as featureCharacterActions from './../../../feauture/characters/store/action/characters.actions';
import * as featureFilmActions from './../../../feauture/films/store/action/films.actions';
import * as featurePlanetActions from './../../../feauture/planets/store/action/planets.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value: string;
  subscriptions: { [key: string]: any } = {};

  constructor(private store: Store<fromRoot.RouterStateUrl>) {
  }

  ngOnInit(): void {
  }


  search(): void {
    this.subscriptions.routerSelector = this.store
      .pipe(
        debounceTime(600),
        take(1),
        select(fromRoot.getCurrentRouteState))
      .subscribe((route) => {
        this.searchValue(route.firstChild.routeConfig.path);
      });

  }


  private searchValue(route: string): void {
    switch (route) {
      case 'character': {
        this.store.dispatch(featureCharacterActions.LoadCharacters({searchParam: this.value}));
        break;
      }
      case 'film': {
        this.store.dispatch(featureFilmActions.LoadFilms({searchParam: this.value}));
        break;
      }
      case 'planet': {
        this.store.dispatch(featurePlanetActions.LoadPlanets({searchParam: this.value}));
        break;
      }
    }
  }
}
