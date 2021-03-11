import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, map, take} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../../reducers';
import {Character} from '../../models/character';
import {selectCharacterById} from '../../store/reducers';
import {LoadingService} from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  subscriptions: { [key: string]: any } = {};
  character: Character;

  constructor(private store: Store<fromRoot.RouterStateUrl>, private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.subscriptions.routerSelector = this.store
      .pipe(take(1),
        select(fromRoot.getCurrentRouteState))
      .subscribe((route) => {
        this.getCharacter(route.firstChild.params.id);
      });
  }

  getCharacter(characterId): void {
    this.store.select(selectCharacterById(characterId)).pipe(
      take(1),
      filter(character => character !== undefined),
      map((character: Character) => {
        this.character = character;
        this.loadingService.init([character.homeworld],
          character.films, undefined,
          character.vehicles, character.starships, character.species);
      })).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.routerSelector.unsubscribe();
  }

}
