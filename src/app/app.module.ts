import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeFooterComponent } from './components/poke-footer/poke-footer.component';
import { PokeHeaderComponent } from './components/poke-header/poke-header.component';
import { PokeSideNavComponent } from './components/poke-side-nav/poke-side-nav.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeHeaderComponent,
    PokeFooterComponent,
    PokeSideNavComponent,
    PokeTableComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
