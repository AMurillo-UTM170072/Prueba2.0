import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from '../../modelos/usuarios-model.dto';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {
  listaVacia: undefined;
  posts : UsuariosModel[]=[];
   
  constructor(private servicioUsuario:UsuariosService ) { }

  ngOnInit(): void {
    this.cargaUsuario()
  }
  cargaUsuario():void{
    this.servicioUsuario.lista().subscribe(
      data=>{
        this.posts = data;
        this.listaVacia= undefined
      },err=>{
        console.log('Exploto todo en:',err);
      }
    );
  }

}
