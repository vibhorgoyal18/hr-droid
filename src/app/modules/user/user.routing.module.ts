import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserAccountComponent} from './user-account/user-account.component';
import {UserListComponent} from './user-list/user-list.component';

const USER_ROUTES: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info',
    },
    {
        path: 'all',
        component: UserListComponent,
    },
    {
        path: 'info',
        component: UserComponent,
        children: [
            {
                path: ':employee_id',
                component: UserInfoComponent,
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'me'
            }
        ]
    },
    {
        path: 'detail',
        component: UserComponent,
        children: [
            {
                path: ':employee_id',
                component: UserDetailComponent,
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'me'
            }
        ]
    },
    {
        path: 'account-detail',
        component: UserComponent,
        children: [
            {
                path: ':employee_id',
                component: UserAccountComponent,
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'me'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(USER_ROUTES)
    ],
    exports: [RouterModule]

})

export class UserRoutingModule {
}

