import { Component, OnInit } from '@angular/core';
import { RegistroComponent } from '../registro/registro.component';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-nueva-re',
  templateUrl: './nueva-re.component.html',
  styleUrls: ['./nueva-re.component.css']
})
export class NuevaReComponent implements OnInit {

  isLogged:boolean;
  isAdmin:boolean;
  constructor( private tokenS:TokenService) { }

  ngOnInit(): void {
    this.isLogged=this.tokenS.isLogged();
    this.isAdmin=this.tokenS.isAdmin();
  }

}
