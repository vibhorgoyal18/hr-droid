import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';

@Component({
    selector: 'app-secured',
    templateUrl: './secured.component.html',
    styleUrls: ['./secured.component.scss']
})
export class SecuredComponent implements OnInit {
    showLoading: boolean;

    constructor(private userService: UserService) {
    }

    async ngOnInit() {
        this.showLoading = true;
        try {
            await this.userService.getLoggedInUserInfo();
        } finally {
            this.showLoading = false;
        }
    }

}
