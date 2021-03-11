import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroupState} from 'ngrx-forms';
import {CharacterForm} from '../../store/reducers/character-form.reducer';
import {select, Store} from '@ngrx/store';
import * as fromCharacter from '../../store/reducers';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {map, take} from 'rxjs/operators';
import * as featureCharacterForm from '../../store/action/character-form.actions';


@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

  formState$: Observable<FormGroupState<CharacterForm>>;

  constructor(private store: Store<fromCharacter.State>, private modal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.formState$ = this.store.pipe(select(fromCharacter.selectCharacterForm));

  }

  saveSettings(): void {
    this.formState$.pipe(
      take(1),
      map(fs => featureCharacterForm.saveCharacterForm({formValue: fs.value}))).subscribe();
    this.close();
  }

  close(): void {
    this.modal.close();
  }
}
