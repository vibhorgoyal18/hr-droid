import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user.routing.module';
import {UserComponent} from './user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    UserRoutingModule,
  ],
  exports: [],
  providers: [],
})

export class UserModule {
}
