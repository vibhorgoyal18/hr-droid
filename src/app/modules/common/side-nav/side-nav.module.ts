import {NgModule} from '@angular/core';
import {SideNavComponent} from './side-nav.component';
import {SideNavService} from './side-nav.service';
import {MatTreeModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        SideNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [SideNavComponent],
    providers: [],
})

export class SideNavModule {
}
