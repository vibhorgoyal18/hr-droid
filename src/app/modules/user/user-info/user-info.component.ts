import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserInfoModel} from '../../../models/user.model';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

    userInfo: UserInfoModel;

    constructor(private userService: UserService) {
    }

    ngOnInit() {

        this.userService.userInfo.subscribe(data => {
            this.userInfo = data;
            console.log(this.userInfo);
        });
    }
}
