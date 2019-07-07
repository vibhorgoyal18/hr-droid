import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ToastrService} from 'ngx-toastr';
import {UserInfoModel} from '../../../models/user.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

    allUserInfo: UserInfoModel[];
    showLoading: boolean;
    isAdmin: boolean;
    userInfoSubscription: Subscription;


    constructor(private userService: UserService,
                private toastrService: ToastrService) {
    }

    async ngOnInit() {
        try {
            this.showLoading = true;
            this.userInfoSubscription = this.userService.userInfo.subscribe(data => {
                if (data) {
                    this.isAdmin = data.role === 'ADMIN';
                }
            });
            this.allUserInfo = await this.userService.getAllUserInfo();
        } catch (error) {
            this.toastrService.error(error);
        } finally {
            this.showLoading = false;
        }
    }

    ngOnDestroy() {
        this.userInfoSubscription.unsubscribe();
    }

}
