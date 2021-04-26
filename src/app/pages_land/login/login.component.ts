import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModules } from 'src/app/modules/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModules=new UsuarioModules();
  

  constructor(private router:Router) { }

  ngOnInit() {
  
  }
  login(form: NgForm){

    if(form.invalid){return;}
    this.router.navigateByUrl('/Reservaciones')
 }

}
