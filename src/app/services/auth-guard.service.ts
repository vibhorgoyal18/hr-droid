import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router,
                private toastrSvc: ToastrService) {
    }

    async canActivate(route: ActivatedRouteSnapshot) {
        if (!localStorage.getItem('token')) {
            this.toastrSvc.error('You must login to view this page');
            await this.router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
}
