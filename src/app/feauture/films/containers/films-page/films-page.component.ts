import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromFilms from './../../store/reducers';
import {Film} from '../../models/film';
import * as featureFilmActions from './../../store/action/films.actions';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css']
})
export class FilmsPageComponent implements OnInit {
  films$: Observable<Film[]>;

  constructor(private store: Store<fromFilms.FilmsState>) {
    this.films$ = this.store.pipe(select(fromFilms.selectAllFilms));
    this.store.dispatch(featureFilmActions.LoadFilms({}));
  }

  ngOnInit(): void {

  }

}
