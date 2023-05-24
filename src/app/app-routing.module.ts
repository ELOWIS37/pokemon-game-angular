import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import {HabilitatsEloyCastComponent} from "./game/components/habilitats-eloy-cast/habilitats-eloy-cast.component";
import {GameComponent} from "./game/pages/game/game.component";

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'habilitatsEloyCast/:pokemonName', component: HabilitatsEloyCastComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
