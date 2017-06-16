import { Component, OnInit } from '@angular/core';

import { FirebaseObjectObservable } from 'angularfire2/database';

import { CellService } from '../shared/cell.service';
import { Board } from '../shared/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [CellService]
})
export class BoardComponent implements OnInit   { 
  board: FirebaseObjectObservable<any[]>;

  constructor(private cellService: CellService) { }
  
  ngOnInit() {
    // this.board = this.cellService.getBoard()
  }

}
