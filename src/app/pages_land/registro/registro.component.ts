import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModules } from 'src/app/modules/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModules =new UsuarioModules;
  
  
  constructor(private router:Router) { }
  
  ngOnInit() {
    this.usuario=new UsuarioModules;
  }
  onSubmit(form:NgForm){

    console.log('formulario Enviado');
    //  Recibe el usuaro
     console.log(this.usuario);
     console.log(form);


     if (form.invalid) { return; }
     this.router.navigateByUrl('/Usuarios')
  }

}
