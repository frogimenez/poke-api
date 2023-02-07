import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeHeaderComponent } from './components/poke-header/poke-header.component';
import { PokeFooterComponent } from './components/poke-footer/poke-footer.component';
import { PokeSideNavComponent } from './components/poke-side-nav/poke-side-nav.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeHeaderComponent,
    PokeFooterComponent,
    PokeSideNavComponent,
    PokeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
