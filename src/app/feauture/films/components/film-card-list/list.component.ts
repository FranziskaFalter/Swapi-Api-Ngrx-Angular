import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../models/film';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() films: Film[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
