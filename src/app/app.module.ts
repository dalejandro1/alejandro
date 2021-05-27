import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CafesComponent} from './component/cafes/cafes.component';
import {ListadoComponent} from './component/listado/listado.component';
import {ChemexComponent} from './component/Chemex/Chemex.component';
import {AeropressComponent} from './component/Aeropress/Aeropress.component';
import {V60Component} from './component/V60/V60.component';
import {NavComponent} from './component/nav/nav.component';
import {AppRoutingModule} from './app.routes'

@NgModule({
  declarations: [
    AppComponent ,
    CafesComponent,
    ListadoComponent,
    ChemexComponent,
    AeropressComponent,
    V60Component ,
    NavComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
