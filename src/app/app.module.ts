import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {AppRoutingModule} from './app-routing.module';
import { SideNavComponent } from './modules/common/side-nav/side-nav.component';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right'
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    AuthGuardService
  ],
  exports: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
