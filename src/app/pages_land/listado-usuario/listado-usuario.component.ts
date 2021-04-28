import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from '../../modelos/usuarios-model.dto';
import { UsuariosService } from '../../services/usuarios.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {
  listaVacia: undefined;
  posts : UsuariosModel[]=[];
  isLogged:boolean;
  isAdmin:boolean;
  constructor(private servicioUsuario:UsuariosService
    ,private tokenS:TokenService ) { }

  ngOnInit(): void {
    this.cargaUsuario()
    this.isLogged=this.tokenS.isLogged();
    this.isAdmin=this.tokenS.isAdmin();
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
