import {AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {filter, map, take} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../../reducers';
import {Film} from '../../models/film';
import {selectFilmById} from '../../store/reducers';
import {LoadingService} from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnDestroy, OnInit, AfterContentChecked {

  subscriptions: { [key: string]: any } = {};
  film: Film;

  constructor(private store: Store<fromRoot.RouterStateUrl>, private loadingService: LoadingService, private cdref: ChangeDetectorRef) {
  }


  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
    this.subscriptions.routerSelector = this.store
      .pipe(take(1),
        select(fromRoot.getCurrentRouteState))
      .subscribe((route) => {
        this.getFilm(route.firstChild.params.id);
      });
  }

  getFilm(filmId): void {
    this.store.select(selectFilmById(filmId)).pipe(
      take(1),
      filter(film => film !== undefined),
      map((film: Film) => {
        this.film = film;
        this.loadingService.init(film.planets, undefined,
          film.characters, film.vehicles, film.starships,
          film.species);
      })).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.routerSelector.unsubscribe();
  }


  romanize(num: number): string {
    const lookup = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let roman = '';
    for (let i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }


}
