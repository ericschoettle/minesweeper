import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { TdComponent } from './td/td.component';
import { BoardCreatorComponent } from './board-creator/board-creator.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    TdComponent,
    BoardCreatorComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
