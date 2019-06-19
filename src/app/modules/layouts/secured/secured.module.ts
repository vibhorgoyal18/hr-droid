import {NgModule} from '@angular/core';
import {SecuredRoutingModule} from './secured.routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {SecuredComponent} from './secured.component';
import {HeaderModule} from '../../common/header/header.module';
import {DirectivesModule} from '../../common/directives/directives.module';
import {SideNavModule} from '../../common/side-nav/side-nav.module';
import {SideNavService} from '../../common/side-nav/side-nav.service';

@NgModule({
  declarations: [
    SecuredComponent
  ],
  imports: [
    SecuredRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    HeaderModule,
    DirectivesModule,
    SideNavModule
  ],
  exports: [
    SecuredRoutingModule
  ],
  providers: [
    SideNavService
  ],
})

export class SecuredModule {
}
