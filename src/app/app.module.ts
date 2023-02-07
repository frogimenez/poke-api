import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeHeaderComponent } from './components/poke-header/poke-header.component';
import { PokeFooterComponent } from './components/poke-footer/poke-footer.component';
import { PokeSideNavComponent } from './components/poke-side-nav/poke-side-nav.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PokeHeaderComponent,
    PokeFooterComponent,
    PokeSideNavComponent,
    PokeTableComponent,
    PokeHomeComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
