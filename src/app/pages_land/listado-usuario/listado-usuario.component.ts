import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {
  filterpost='';
  posts = [
    {
      id: 1,
      nombre: "Jesus Alonso Rios",
      email: "ejemplo@gmail.com",
      telefono: "443-1328966",
      accion: "",
    },
    {
      id: 2,
      nombre: "Alejandro Alvez",
      correo: "ejemplo@gmail.com",
      telefono: "443-1328966",
      accion: "",
    },
    {
      id: 3,
      nombre: "Filulais Juanjo",
      correo: "ejemplo@gmail.com",
      telefono: "443-1328966",
      accion: "",
    },
    {
      id: 4,
      nombre: "Andrea Perez",
      correo: "ejemplo@gmail.com",
      telefono: "443-1328966",
      accion: "",
    },
    {
      id: 5,
      nombre: "Lucifer Garcia",
      correo: "ejemplo@gmail.com",
      telefono: "443-1328966",
      accion: "",
    }
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
