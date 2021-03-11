import {Component, Input, OnInit} from '@angular/core';
import * as fromCharacter from '../../../feauture/characters/store/reducers';
import {distinctUntilChanged, filter, map, take} from 'rxjs/operators';
import {Character} from '../../../feauture/characters/models/character';
import {LoadingService} from '../../services/loading.service';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-character-link-list',
  templateUrl: './character-link-list.component.html',
  styleUrls: ['./character-link-list.component.css']
})
export class CharacterLinkListComponent implements OnInit {

  @Input() arrayOfCharacters: string[];
  characterName: string;

  constructor(public loadingService: LoadingService, private store: Store<fromRoot.RouterStateUrl>) {
  }

  ngOnInit(): void {
  }

  getCharacterName(characterUrl): Observable<string> {
    return this.store.select(
      fromCharacter.selectCharacterById(
        this.loadingService.split(characterUrl))).pipe(
      take(1),
      distinctUntilChanged(),
      filter(character => character !== undefined),
      map((character: Character) => character.name
      ));
  }
}
