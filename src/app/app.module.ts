import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { MainComponent } from './pages_land/main/main.component';
import { LoginComponent } from './pages_land/login/login.component';
import { RegistroComponent } from './pages_land/registro/registro.component';
import { ListadoUsuarioComponent } from './pages_land/listado-usuario/listado-usuario.component';
import { ListadoReservacionesComponent } from './pages_land/listado-reservaciones/listado-reservaciones.component';
import { NuevaReComponent } from './pages_land/nueva-re/nueva-re.component';
import { HomeUsuarioComponent } from './pages_land/home-usuario/home-usuario.component';
import { FilterPipe } from './pipe/filter.pipe';
//requisitos HTPP
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { interceptorProvider } from './interceptores/admin-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegistroComponent,
    ListadoUsuarioComponent,
    ListadoReservacionesComponent,
    NuevaReComponent,
    HomeUsuarioComponent,
    FilterPipe,
    ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
