import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../../models/planet';
import {FilmFormComponent} from '../../../films/components/film-form/film-form.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoadingService} from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {

  @Input() planet: Planet;


  constructor(private modalService: NgbModal, public loadingService: LoadingService) {
  }

  ngOnInit(): void {
  }

  open(): void {
    this.modalService.open(FilmFormComponent);
  }
}
