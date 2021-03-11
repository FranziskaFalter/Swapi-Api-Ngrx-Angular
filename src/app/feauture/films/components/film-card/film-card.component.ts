import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../models/film';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FilmFormComponent} from '../film-form/film-form.component';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }


  open(): void {
    this.modalService.open(FilmFormComponent);
  }
}
