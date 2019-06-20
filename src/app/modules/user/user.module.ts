import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user.routing.module';
import {UserComponent} from './user.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {MatCardModule} from '@angular/material';

@NgModule({
    declarations: [
        UserComponent,
        UserInfoComponent
    ],
    imports: [
        UserRoutingModule,
        MatCardModule,
    ],
    exports: [],
    providers: [],
})

export class UserModule {
}
