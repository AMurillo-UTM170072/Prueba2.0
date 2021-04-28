import { Component, OnInit } from '@angular/core';
import { modeloReservacion } from 'src/app/modelos/reservacion-model';
import { ReservacionesService } from '../../services/reservaciones.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-listado-reservaciones',
  templateUrl: './listado-reservaciones.component.html',
  styleUrls: ['./listado-reservaciones.component.css']
})
export class ListadoReservacionesComponent implements OnInit {
  filterpost='';
  posts :modeloReservacion[]=[];
  isLogged:boolean;
  isAdmin:boolean;

  listaVacia:undefined;
  constructor(private ServicioHotel:ReservacionesService,private tokenS:TokenService ) { }

  ngOnInit(): void {
    this.isLogged=this.tokenS.isLogged();
    this.isAdmin=this.tokenS.isAdmin();
    this.cargaReservaciones();
  }
  cargaReservaciones():void {
  this.ServicioHotel.lista().subscribe(
      data=>{
        this.posts = data;
        this.listaVacia= undefined
      },err=>{
        console.log('Exploto todo en:',err);
      }
    );
  }

}
