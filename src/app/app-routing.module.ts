import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import {  MainComponent  } from "./pages_land/main/main.component";
import { LoginComponent } from "./pages_land/login/login.component";
import { RegistroComponent } from "./pages_land/registro/registro.component";
import { ListadoUsuarioComponent } from './pages_land/listado-usuario/listado-usuario.component';
import { ListadoReservacionesComponent } from './pages_land/listado-reservaciones/listado-reservaciones.component';
import { NuevaReComponent } from './pages_land/nueva-re/nueva-re.component';
import { HomeUsuarioComponent } from './pages_land/home-usuario/home-usuario.component';
import { AdminGuard } from './Guards/admin.guard';

const routes:Routes=[
{path: 'main', component: MainComponent},
{path: 'login', component: LoginComponent },
{path: 'nuevo', component: RegistroComponent, canActivate:[AdminGuard],data:{expectedRol:['admin']} },
{path: 'Lista-Usuarios', component: ListadoUsuarioComponent,canActivate:[AdminGuard],data:{expectedRol:['admin']} },
{path: 'Reservaciones', component:ListadoReservacionesComponent,canActivate:[AdminGuard],data:{expectedRol:['admin','user']} },
{path: 'nuevaReservacion', component:NuevaReComponent,canActivate:[AdminGuard],data:{expectedRol:['admin','user']}},
{path: '', component:HomeUsuarioComponent},
{path: '**', redirectTo:'',pathMatch:'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
