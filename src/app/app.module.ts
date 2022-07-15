import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { IndexComponent } from './components/index/index.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    AyudaComponent,
    IndexComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
