import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';

const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent
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

