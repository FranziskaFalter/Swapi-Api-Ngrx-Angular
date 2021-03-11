import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadingService} from '../../services/loading.service';
import * as fromRoot from '../../../reducers';
import * as fromSwapiApi from '../../store/reducers';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-spaceship-link-list',
  templateUrl: './spaceship-link-list.component.html',
  styleUrls: ['./spaceship-link-list.component.css']
})
export class SpaceshipLinkListComponent implements OnInit {

  @Input() arrayOfSpaceships: string[];

  constructor(public loadingService: LoadingService, private store: Store<fromRoot.RouterStateUrl>) {
  }

  ngOnInit(): void {
  }

  getSpaceshipsName(spaceshipsUrl): Observable<string> {
    return this.store.select(fromSwapiApi.selectSpaceShipsById(this.loadingService.split(spaceshipsUrl))).pipe(
      take(1),
      map((spaceship) => {
        if (spaceship) {
          return spaceship.name;
        }
      }));

  }
}
