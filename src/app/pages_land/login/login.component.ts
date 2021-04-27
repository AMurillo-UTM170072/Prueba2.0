import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { AtuhService } from '../../services/atuh.service';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuarioDto } from '../../modelos/login-usuario.dto';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : LoginUsuarioDto|any;
  NombreUsuario!:string;
  password!:string;
  constructor(private router:Router,
    private token: TokenService,
    private LoginService:AtuhService,
    private toastrService:ToastrService ) { }

  ngOnInit() {}
  login():void{
    this.usuario= new LoginUsuarioDto(this.NombreUsuario,this.password);
    this.LoginService.login(this.usuario).subscribe(
      data => {
        console.log(data);
        if (!data.token) {
          this.toastrService.error(data.response.message, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        } else {
          this.token.setToken(data.token);
          this.router.navigate(['/']);
        }
      },
      err => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
 }
  resecion(){
    this.router.navigateByUrl('/login')
  }
}
