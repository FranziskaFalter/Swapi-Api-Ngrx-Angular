import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroupState} from 'ngrx-forms';
import {select, Store} from '@ngrx/store';
import * as fromPlanet from '../../../planets/store/reducers';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {map, take} from 'rxjs/operators';
import * as featurePlanetForm from '../../../planets/store/action/planet-form.actions';
import {PlanetForm} from '../../store/reducers/planet-form.reducer';
import {LoadingService} from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.css']
})
export class PlanetFormComponent implements OnInit {

  formState$: Observable<FormGroupState<PlanetForm>>;

  constructor(private store: Store<fromPlanet.State>, private modal: NgbActiveModal, public loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.formState$ = this.store.pipe(select(fromPlanet.selectPlanetForm));

  }

  saveSettings(): void {
    this.formState$.pipe(
      take(1),
      map(fs => featurePlanetForm.savePlanetForm({formValue: fs.value}))).subscribe();
    this.close();
  }

  close(): void {
    this.modal.close();
  }

}
