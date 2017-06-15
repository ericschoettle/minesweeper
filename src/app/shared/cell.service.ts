import { Injectable } from '@angular/core';

import { Cell } from './cell.model'
import { Row } from './row.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CellService {
  rows: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.rows = database.list('rows');
  }

  getRows(){
    return this.rows;
  }

  makeBoard(h, w) {
    for (var y = 0; y < h; y++) {
      var cellsArray = [];
      for (var x = 0; x < w; x++) {
        var newCell = new Cell (false, 0, false, x, y);
        cellsArray.push(newCell);
      }
      var newRow = new Row (y, cellsArray);
      this.rows.push(newRow);
    }
  }
}
