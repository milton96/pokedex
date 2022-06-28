import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AyudaComponent } from './components/ayuda/ayuda.component';
import { IndexComponent } from './components/index/index.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'pokemon/:name', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
