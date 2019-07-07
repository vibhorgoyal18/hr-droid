import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user.routing.module';
import {UserComponent} from './user.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {DirectivesModule} from '../common/directives/directives.module';
import {UserAccountComponent} from './user-account/user-account.component';
import {UserListComponent} from './user-list/user-list.component';

@NgModule({
    declarations: [
        UserComponent,
        UserInfoComponent,
        UserDetailComponent,
        UserAccountComponent,
        UserListComponent
    ],
    imports: [
        UserRoutingModule,
        MatCardModule,
        CommonModule,
        DirectivesModule,
        MatButtonModule,
    ],
    exports: [UserRoutingModule],
    providers: [],
})

export class UserModule {
}
