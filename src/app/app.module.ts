import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { MainComponent } from './pages_land/main/main.component';
import { LoginComponent } from './pages_land/login/login.component';
import { RegistroComponent } from './pages_land/registro/registro.component';
import { ListadoUsuarioComponent } from './pages_land/listado-usuario/listado-usuario.component';
import { ListadoReservacionesComponent } from './pages_land/listado-reservaciones/listado-reservaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegistroComponent,
    ListadoUsuarioComponent,
    ListadoReservacionesComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
