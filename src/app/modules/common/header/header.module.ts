import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SideNavService} from '../side-nav/side-nav.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule

  ],
  exports: [HeaderComponent],
  providers: [
      SideNavService
  ],
})

export class HeaderModule {
}
