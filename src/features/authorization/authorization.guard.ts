import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { AuthorizationService } from 'src/features/authorization/authorization.service'

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authService: AuthorizationService, private router: Router) { }

  canActivate(){
    if (this.authService.isAuthenticated) {
      return true;
    }
    this.router.navigate(['auth']).catch(console.error)
    return false;
  }

}
