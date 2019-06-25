import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login.routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {LoginService} from './login.service';
import {CommonModule} from '@angular/common';
import {DirectivesModule} from '../../common/directives/directives.module';
import {HeaderModule} from '../../common/header/header.module';
import {UserService} from '../../user/user.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        CommonModule,
        DirectivesModule,
        HeaderModule,
    ],
    exports: [LoginRoutingModule],
    providers: [
        LoginService,
        UserService
    ],
})

export class LoginModule {
}
