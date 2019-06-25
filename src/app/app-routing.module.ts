import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './modules/layouts/login/login.module#LoginModule'
    },
    {
        path: '',
        loadChildren: './modules/layouts/secured/secured.module#SecuredModule',
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});

