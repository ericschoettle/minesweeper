import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

import { Cell } from './cell.model'
import { Row } from './row.model'
import { Board } from './board.model'


@Injectable()
export class CellService {
  boards: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.boards = database.list('boards');
  }

  getBoard(key){
    // return this.board;
  }

  makeBoard(h: number, w: number, bombRatio: number) {
    var newBoard = new Board([]);
    var boardID = this.boards.push(newBoard).key;
    console.log(boardID)
    var rows: FirebaseListObservable<any[]> = this.database.list('/boards/' + boardID + '/rows/')
    for (var y = 0; y < h; y++) {
      var newRow = new Row (y, []);
      var rowID = rows.push(newRow).key;
      console.log(rowID)
      var cells: FirebaseListObservable<any[]> = this.database.list('/boards/' + boardID + '/rows/' + rowID + '/cells/')
      for (var x = 0; x < w; x++) {
        var newCell = new Cell (this.makeBombs(bombRatio), 0, false, x, y);
        cells.push(newCell)
      }
    }
  }

  makeBombs(bombRatio) {
    return (Math.random() < bombRatio)
  }

  findAdjacent(cell) {
    // for (var x = -1; x <= 1; x++) {
    //   for (var y = -1; y <= 1 y++) {
    //     this.board
        
    //   }
      
    // }
  }
}
