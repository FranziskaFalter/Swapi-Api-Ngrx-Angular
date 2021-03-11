import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../models/character';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CharacterFormComponent} from '../character-form/character-form.component';
import {LoadingService} from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;

  constructor(private modalService: NgbModal, public loadingService: LoadingService) {
  }

  ngOnInit(): void {
  }

  open(): void {
    this.modalService.open(CharacterFormComponent);
  }
}
