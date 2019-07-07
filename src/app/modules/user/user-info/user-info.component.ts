import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserInfoModel} from '../../../models/user.model';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {

    userInfo: UserInfoModel;
    showLoading: boolean;
    employeeId: string;
    paramMapSubscription: Subscription;

    constructor(private userService: UserService,
                private toastrService: ToastrService,
                private route: ActivatedRoute) {
    }

    async ngOnInit() {
        this.paramMapSubscription = this.route.paramMap.subscribe(async parMap => {
            this.employeeId = parMap.get('employee_id');
            this.userService.sideNavEmployeeId.next(this.employeeId);
            this.showLoading = true;
            try {
                this.userInfo = await this.userService.getUserInfo(this.employeeId);
            } catch (error) {
                this.toastrService.error(error);
            } finally {
                this.showLoading = false;
            }
        });
    }

    ngOnDestroy(): void {
        this.paramMapSubscription.unsubscribe();
    }
}
