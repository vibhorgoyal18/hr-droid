import {Component, Input, OnInit} from '@angular/core';
import {SideNavService} from '../side-nav/side-nav.service';
import {UserService} from '../../user/user.service';
import {UserInfoModel} from '../../../models/user.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() isSecuredLayout = false;
    isSideNavDisplayed: boolean;
    public userFirstName = '';
    public userLastName = '';

    constructor(
        private sideNavService: SideNavService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.userService.userInfo.subscribe((data: UserInfoModel) => {
            this.userFirstName = data.first_name.charAt(0);
            this.userLastName = data.last_name.charAt(0);
        });
    }

    showHideSideNav() {
        this.isSideNavDisplayed = !this.isSideNavDisplayed;
        this.sideNavService.isSideNavDisplayed.next(this.isSideNavDisplayed);
    }
}
