import {Component, OnInit} from '@angular/core';
import {SideNavModel} from '../../models/side-nav.model';
import {SideNavService} from '../common/side-nav/side-nav.service';
import {UserService} from './user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    sideNavObject: SideNavModel;
    userName: string;

    constructor(private sideNavService: SideNavService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.userService.sideNavEmployeeId.subscribe(async employeeId => {
            const userInfo = await this.userService.getUserInfo(employeeId);
            this.sideNavObject = {
                pageTitle: userInfo.first_name,
                link: '/user/info/' + employeeId,
                list: [
                    {
                        title: 'Info',
                        isActive: false,
                        route: '/user/info/' + employeeId
                    },
                    {
                        title: 'Details',
                        isActive: false,
                        route: '/user/detail/' + employeeId
                    },
                    {
                        title: 'Account Details',
                        isActive: false,
                        route: '/user/account-detail/' + employeeId
                    }
                ]
            };
            this.sideNavService.sideNavObjects.next(this.sideNavObject);
            this.sideNavService.isSideNavToggleActive.next(true);
        });
    }

}
