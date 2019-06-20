import {Component, OnInit} from '@angular/core';
import {SideNavModel} from '../../models/side-nav.model';
import {SideNavService} from '../common/side-nav/side-nav.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    sideNavObject: SideNavModel[];

    constructor(private sideNavService: SideNavService) {
    }

    ngOnInit() {
        this.sideNavObject = [
            {
                title: 'Info',
                isActive: true,
                route: 'home/user/info'
            }
        ];
        this.sideNavService.sideNavObjects.next(this.sideNavObject);
    }

}
