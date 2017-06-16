import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

import { Cell } from './cell.model'
import { Row } from './row.model'
import { Board } from './board.model'


@Injectable()
export class CellService {
  boards: FirebaseListObservable<any[]>;
  boardID: string

  constructor(private database: AngularFireDatabase) {
    this.boards = database.list('boards');
  }

  getBoard(key){
    // return this.board;
  }

  makeBoard(h, w, bombRatio) {
    var newBoard = new Board([]);
    var firebaseBoard = this.boards.push(newBoard);
    this.boardID = firebaseBoard.key;
    debugger;
    for (var y = 0; y < h; y++) {
      var newRow = new Row (y, []);
      var firebaseRow = firebaseBoard.push(newRow)
      for (var x = 0; x < w; x++) {
        var newCell = new Cell (this.makeBombs(bombRatio), 0, false, x, y);
        var firebaseCell = firebaseRow.push(newCell)
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
