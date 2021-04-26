import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosModel } from '../../modelos/usuarios-model.dto';
import { UsuariosService } from '../../services/usuarios.service';

import { NvoUsuarioDTO } from '../../modelos/nuevoUsuario.DTO';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: NvoUsuarioDTO = null; 

  Nombre:string;
   ApPaterno:string;
   ApMaterno:string;
   telefono:number;
   NombreUsuario:string;
   correo:string;
   password:string;
  constructor(private router:Router,
    private servicioUsuario:UsuariosService ) { }
  
  ngOnInit() {
    
  }
  registro(){
    this.usuario=new NvoUsuarioDTO(
      this.Nombre,
      this.ApPaterno,
      this.ApMaterno,
      this.telefono,
      this.NombreUsuario,
      this.correo,
      this.password
      )
    /*
    console.log('formulario Enviado');
    //  Recibe el usuaro
     console.log();
     console.log(form);


     if (form.invalid) { return; }
     this.router.navigateByUrl('/Usuarios')*/
  }

}
