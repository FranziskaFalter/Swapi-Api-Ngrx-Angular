import {Component, Input, OnInit} from '@angular/core';
import * as fromSwapiApi from '../../store/reducers';
import {map, take} from 'rxjs/operators';
import {LoadingService} from '../../services/loading.service';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-species-link-list',
  templateUrl: './species-link-list.component.html',
  styleUrls: ['./species-link-list.component.css']
})
export class SpeciesLinkListComponent implements OnInit {

  @Input() arrayOfSpecies: string[];

  constructor(public loadingService: LoadingService, private store: Store<fromRoot.RouterStateUrl>) {
  }


  ngOnInit(): void {
  }

  getSpeciesName(speciesUrl): Observable<string> {
    return this.store.select(fromSwapiApi.selectSpeciesById(this.loadingService.split(speciesUrl))).pipe(
      take(1),
      map((species: any) => {
        if (species) {
          return species.name;
        }
      }));
  }
}
