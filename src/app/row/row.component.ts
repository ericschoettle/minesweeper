import { Component, Input, OnInit } from '@angular/core';

import { Row } from '../shared/row.model'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})

export class RowComponent implements OnInit {
  @Input() row: Row;

  constructor() { }

  ngOnInit() {
  }

}
