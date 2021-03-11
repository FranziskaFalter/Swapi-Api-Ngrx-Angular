import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromCharacter from '../../../characters/store/reducers';
import * as featureCharacterActions from './../../store/action/characters.actions';
import {Observable} from 'rxjs';
import {Character} from '../../models/character';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {

  characters$: Observable<Character[]>;

  constructor(private store: Store<fromCharacter.CharactersState>) {
    this.characters$ = this.store.pipe(select(fromCharacter.selectAllCharacters));
    this.store.dispatch(featureCharacterActions.LoadCharacters({}));
  }

  ngOnInit(): void {
  }

}
