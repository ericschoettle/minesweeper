import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';

import { CellService } from '../shared/cell.service';
import { Row } from '../shared/row.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [CellService]
})
export class BoardComponent implements OnInit   { 
  rows: FirebaseListObservable<any[]>;

  constructor(private cellService: CellService) { }
  
  ngOnInit() {
    this.rows = this.cellService.getRows()
  }

}
