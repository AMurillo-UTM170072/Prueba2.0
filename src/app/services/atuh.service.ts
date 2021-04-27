import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginUsuarioDto } from '../modelos/login-usuario.dto';
import { TokenDto } from '../modelos/Token.dto';

@Injectable({
  providedIn: 'root'
})
export class AtuhService {
  authURL=environment.AuthURL;
  constructor(private https:HttpClient) { }
  login(dto:LoginUsuarioDto):Observable<any>{
    return this.https.post<any>(this.authURL+'login',dto);
  }
    //metodo del registro que hace uso del modelo del login
  registro(dto:LoginUsuarioDto):Observable<any>{
    return this.https.post<any>(this.authURL+'nuevo',dto)
  }
    //metodo de refresh que hace uso del modelo del login
  refresh(dto:TokenDto):Observable<any>{
    return this.https.post<any>(this.authURL+'refresh',dto);
  }
}
