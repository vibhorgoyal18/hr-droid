import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/layouts/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: './modules/layouts/secured/secured.module#SecuredModule',
    canActivate: [AuthGuardService]
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });

