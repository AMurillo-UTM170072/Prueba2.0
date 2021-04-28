import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {
  isLogged:boolean;
  isAdmin:boolean;
  NombreUsuario:string;
  constructor( private tokenS:TokenService,
     private router:Router ) { }
  
  ngOnInit(): void {
    this.isLogged=this.tokenS.isLogged();
    this.isAdmin=this.tokenS.isAdmin();

    this.NombreUsuario = this.tokenS.getNombreUsuario();
    console.log('el nombre del usuario es: ', this.NombreUsuario);
  }
  logOut():void{
    this.tokenS.logOut();
    this.router.navigate(['/login']);
  }

}
