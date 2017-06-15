import { Component, Input, OnInit } from '@angular/core';

import { Cell } from '../shared/cell.model'

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TdComponent implements OnInit {
  @Input() cell: Cell;

  constructor() { }

  ngOnInit() {
  }

}
