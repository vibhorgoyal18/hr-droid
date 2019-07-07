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
    isSideNavToggleActive: boolean;
    toggleButtonClass: string;

    constructor(
        private sideNavService: SideNavService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.userService.userInfo.subscribe((data: UserInfoModel) => {
            if (!(data === null)) {
                this.userFirstName = data.first_name;
                this.userLastName = data.last_name;
            }
        });
        this.sideNavService.isSideNavToggleActive
            .subscribe(isSideNavToggleActive => {
                this.isSideNavToggleActive = isSideNavToggleActive;
                this.toggleButtonClass = this.isSideNavToggleActive ? 'animate' : 'disabled';
            });
    }

    showHideSideNav() {
        this.isSideNavDisplayed = !this.isSideNavDisplayed;
        this.sideNavService.isSideNavDisplayed.next(this.isSideNavDisplayed);
    }
}
