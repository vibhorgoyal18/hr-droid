import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecuredComponent} from './secured.component';

const SECURED_ROUTES: Routes = [

  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'user'
  // },
  {
    path: '',
    component: SecuredComponent,
    children: [
      {
        path: 'user',
        loadChildren: '../../user/user.module#UserModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(SECURED_ROUTES)
  ],
  exports: [RouterModule]

})

export class SecuredRoutingModule {
}
