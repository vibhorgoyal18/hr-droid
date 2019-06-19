import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private toastrSvc: ToastrService) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!localStorage.getItem('token')) {
      this.toastrSvc.error('You must login to view this page');
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
