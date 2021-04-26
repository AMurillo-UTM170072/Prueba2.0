import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modeloReservacion } from '../modelos/reservacion-model';
import{ environment  } from './../../environments/environment'; 
@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {
  urlLista=environment.ReservacionURL
  constructor(private httpListener:HttpClient ){ }

  public lista():Observable<modeloReservacion[]>{
    return  this.httpListener.get<modeloReservacion[]>(`${this.urlLista}`)
  }
}
