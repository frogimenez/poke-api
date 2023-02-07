import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';

const routes: Routes = [
  {path: 'home', component: PokeHomeComponent},
  {path: 'pokeDetail/:id', component: PokeDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
