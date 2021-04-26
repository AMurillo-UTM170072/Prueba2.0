import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-reservaciones',
  templateUrl: './listado-reservaciones.component.html',
  styleUrls: ['./listado-reservaciones.component.css']
})
export class ListadoReservacionesComponent implements OnInit {
  filterpost='';
  posts = [
    {
      id: 1,
      nombre: "Jesus Alonso Rios",
      horaI: "",
      horaF: "",
      motivo: "",
      accion: "",
    },
    {
      id: 2,
      nombre: "Alejandro Alvez",
      horaI: "",
      horaF: "",
      motivo: "",
      accion: "",
    },
    {
      id: 3,
      nombre: "Filulais Juanjo",
      horaI: "",
      horaF: "",
      motivo: "",
      accion: "",
    },
    {
      id: 4,
      nombre: "Andrea Perez",
      horaI: "",
      horaF: "",
      motivo: "",
      accion: "",
    },
    {
      id: 5,
      nombre: "Lucifer Garcia",
      horaI: "",
      horaF: "",
      motivo: "",
      accion: "",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
