import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogged:boolean;
  isAdmin:boolean;
  constructor(private router:Router,private tokenS:TokenService) { }

  ngOnInit(): void {
    this.isLogged=this.tokenS.isLogged();
    this.isAdmin=this.tokenS.isAdmin();
  }
  
  logOut():void{
    this.tokenS.logOut();
    this.router.navigate(['/login']);
  }
}
