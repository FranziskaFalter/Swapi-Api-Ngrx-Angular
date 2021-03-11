import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../../feauture/films/models/film';
import {select, Store} from '@ngrx/store';
import * as fromFilm from '../../../feauture/films/store/reducers';
import {filter, map, take} from 'rxjs/operators';
import {LoadingService} from '../../services/loading.service';
import * as fromRoot from '../../../reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-film-link-list',
  templateUrl: './film-link-list.component.html',
  styleUrls: ['./film-link-list.component.css']
})
export class FilmLinkListComponent implements OnInit {

  @Input() arrayOfFilms: string[];

  constructor(public loadingService: LoadingService, private store: Store<fromRoot.RouterStateUrl>) {
  }


  ngOnInit(): void {
  }


  getFilmNames(filmUrl: string): Observable<string> {
    return this.store.pipe(
      select(fromFilm.selectFilmById(this.loadingService.split(filmUrl))),
      take(1),
      filter((film) => film !== undefined),
      map((film: Film) => film.title
      ));
  }


}
