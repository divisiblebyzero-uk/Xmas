import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharadesComponent } from './charades/charades.component';
import { RandomCountryGameComponent } from './random-country-game/random-country-game.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: "home",
    component: HomeComponent,
    data: { title: 'Homepage'}
  },
  {
    path: "charades",
    component: CharadesComponent,
    data: { title: 'Charades Game' }
  },
  {
    path: "random-country",
    component: RandomCountryGameComponent,
    data: { title: 'Random Country Game' }
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
