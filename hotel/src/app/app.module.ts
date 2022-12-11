import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaprenotazioniComponent } from './listaprenotazioni/listaprenotazioni.component';
import { DettagliStanzaComponent } from './dettagli-stanza/dettagli-stanza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaprenotazioniComponent,
    DettagliStanzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
