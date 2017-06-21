import { Component, OnInit } from '@angular/core';

import { CellService } from '../shared/cell.service'

@Component({
  selector: 'app-board-creator',
  templateUrl: './board-creator.component.html',
  styleUrls: ['./board-creator.component.css'],
  providers: [CellService]
})
export class BoardCreatorComponent implements OnInit {

  constructor(private cellService: CellService) { }

  ngOnInit() {
  }

  sendBoard(h: string, w: string, bombs: string) {
    this.cellService.makeBoard(parseInt(h), parseInt(w), parseInt(bombs)/10);
  };

}
