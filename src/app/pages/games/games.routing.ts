import { Routes, RouterModule }  from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent
  }
];

export const routing = RouterModule.forChild(routes);