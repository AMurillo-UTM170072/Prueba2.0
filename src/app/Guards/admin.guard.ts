import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  realRol:string;
  constructor(private tokenService:TokenService,private router:Router ){}
  
  canActivate(
    next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
      const expectedRol= next.data.expectedRol;
      this.realRol=this.tokenService.isAdmin()? 'admin':'user';
      if(!this.tokenService.isLogged() || expectedRol.indexof(this.realRol)<0){
        this.router.navigate(['/']);
        return false;
      }
    return true;
  }
  
}
