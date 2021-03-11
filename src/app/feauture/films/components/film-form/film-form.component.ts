import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroupState} from 'ngrx-forms';
import {select, Store} from '@ngrx/store';
import * as fromFilm from '../../../films/store/reducers';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {map, take} from 'rxjs/operators';
import * as featureFilmForm from '../../../films/store/action/film-form.actions';
import {FilmForm} from '../../store/reducers/film-form.reducer';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {

  formState$: Observable<FormGroupState<FilmForm>>;

  constructor(private store: Store<fromFilm.State>, private modal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.formState$ = this.store.pipe(select(fromFilm.selectFilmForm));

  }

  saveSettings(): void {
    this.formState$.pipe(
      take(1),
      map(fs => featureFilmForm.saveFilmForm({formValue: fs.value}))).subscribe();
    this.close();
  }

  close(): void {
    this.modal.close();
  }
}
