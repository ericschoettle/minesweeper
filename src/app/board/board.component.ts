import { Component, OnInit } from '@angular/core';

import { CellService } from '../shared/cell.service';
import { Row } from '../shared/row.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [CellService]
})
export class BoardComponent implements OnInit   { 
  constructor(private cellService: CellService) { }

  get rows() {
    return this.cellService.rows;
  }

  ngOnInit() {
  }

}
