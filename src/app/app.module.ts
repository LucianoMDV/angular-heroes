import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { TituloPipe } from './pipes/titulo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetallesComponent,
    TituloPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
