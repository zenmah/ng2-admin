import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { GamesComponent } from './games.component';
import { ListOfGamesComponent} from './list-of-games';
import { routing } from './games.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    GamesComponent,
    ListOfGamesComponent
  ]
})
export default class GamesModule {}