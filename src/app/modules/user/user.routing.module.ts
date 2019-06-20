import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {UserInfoComponent} from './user-info/user-info.component';

const USER_ROUTES: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'info'
            },
            {
                path: 'info',
                component: UserInfoComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(USER_ROUTES)
    ],
    exports: [RouterModule]

})

export class UserRoutingModule {
}

