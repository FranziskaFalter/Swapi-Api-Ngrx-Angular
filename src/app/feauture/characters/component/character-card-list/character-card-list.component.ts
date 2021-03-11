import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../models/character';

@Component({
  selector: 'app-character-card-list',
  templateUrl: './character-card-list.component.html',
  styleUrls: ['./character-card-list.component.css']
})
export class CharacterCardListComponent implements OnInit {

  @Input() characters: Character[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
