import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import {  MainComponent  } from "./pages_land/main/main.component";
import { LoginComponent } from "./pages_land/login/login.component";
import { RegistroComponent } from "./pages_land/registro/registro.component";
import { ListadoUsuarioComponent } from './pages_land/listado-usuario/listado-usuario.component';
import { ListadoReservacionesComponent } from './pages_land/listado-reservaciones/listado-reservaciones.component';
import { NuevaReComponent } from './pages_land/nueva-re/nueva-re.component';
import { HomeUsuarioComponent } from './pages_land/home-usuario/home-usuario.component';





const routes:Routes=[
{path: 'main', component: MainComponent},
{path: 'login', component: LoginComponent},
{path: 'registro', component: RegistroComponent},
{path: 'Lista-Usuarios', component: ListadoUsuarioComponent},
{path: 'Reservaciones', component:ListadoReservacionesComponent},
{path: 'nuevaReservacion', component:NuevaReComponent},
{path: 'home', component:HomeUsuarioComponent},






{path: '**', redirectTo:'main'},




]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
