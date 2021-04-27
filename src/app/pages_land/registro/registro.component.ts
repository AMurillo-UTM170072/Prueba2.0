import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { NvoUsuarioDTO } from '../../modelos/nuevoUsuario.DTO';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: NvoUsuarioDTO = null;
   Nombre: string;
   ApMaterno: string;
   ApPaterno: string;
   telefono: number;
   NombreUsuario: string;
   correo: string;
   password: string;
  toastrService: any;
   constructor(private router:Router,
    private servicioUsuario:UsuariosService){}
  ngOnInit():void {
    
  }
  registro():void{
    this.usuario=new NvoUsuarioDTO(this.Nombre,this.ApPaterno,this.ApMaterno,
      this.telefono,this.NombreUsuario,this.correo,this.password)
      console.log('probando los datos del usuario' ,this.usuario.correo);
     this.servicioUsuario.guardar(this.usuario).subscribe(
      data => {
        this.toastrService.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
