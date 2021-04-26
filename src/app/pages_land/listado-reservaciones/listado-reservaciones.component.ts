import { Component, OnInit } from '@angular/core';
import { modeloReservacion } from 'src/app/modelos/reservacion-model';
import { ReservacionesService } from '../../services/reservaciones.service';

@Component({
  selector: 'app-listado-reservaciones',
  templateUrl: './listado-reservaciones.component.html',
  styleUrls: ['./listado-reservaciones.component.css']
})
export class ListadoReservacionesComponent implements OnInit {
  filterpost='';
  posts :modeloReservacion[]=[];
  listaVacia:undefined;
  constructor(private ServicioHotel:ReservacionesService ) { }

  ngOnInit(): void {
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
