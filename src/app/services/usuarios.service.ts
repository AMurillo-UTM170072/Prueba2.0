import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosModel } from '../modelos/usuarios-model.dto';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  urlUser= environment.UsuarioURL
  constructor(private httpListener:HttpClient ) { }
  //metodo para visualizar los usuarios alojados en la base de datos
  public lista():Observable<UsuariosModel[]>{
    return  this.httpListener.get<UsuariosModel []>(`${this.urlUser}`)
  }
  //metodo para registrar nuevos usuarios en la base de datos por medio de nestjs
  public guardar(Usuario:UsuariosModel):Observable<any>{
    return this.httpListener.post<any>(`${this.urlUser}`,Usuario)
  }
}
