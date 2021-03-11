import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../../models/planet';

@Component({
  selector: 'app-planets-card-list',
  templateUrl: './planets-card-list.component.html',
  styleUrls: ['./planets-card-list.component.css']
})
export class PlanetsCardListComponent implements OnInit {

  @Input() planets: Planet[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
