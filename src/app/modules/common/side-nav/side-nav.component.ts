import {Component, OnInit} from '@angular/core';
import {SideNavService} from './side-nav.service';
import {SideNavModel} from '../../../models/side-nav.model';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

    isDisplayed: boolean;
    menuItems: SideNavModel[];

    constructor(private sideNavService: SideNavService) {
    }

    ngOnInit() {
        this.sideNavService.isSideNavDisplayed
            .subscribe(isDisplayed => this.isDisplayed = isDisplayed);
        this.sideNavService.sideNavObjects.subscribe(sideNavObjects => this.menuItems = sideNavObjects);
    }

}
