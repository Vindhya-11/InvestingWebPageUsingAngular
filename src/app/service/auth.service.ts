import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { RegistrationserviceService } from './registrationservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private loginServ:RegistrationserviceService) { }
  canActivate(): boolean  {
    return this.loginServ.isValid();
  }
}
