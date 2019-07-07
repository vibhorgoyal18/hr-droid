import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ToastrService} from 'ngx-toastr';
import {AccountDetailsModel} from '../../../models/user.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-user-account',
    templateUrl: './user-account.component.html',
    styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit, OnDestroy {
    showLoading: boolean;
    accountDetails: AccountDetailsModel;
    employeeId: string;
    paramMapSubscription: Subscription;

    constructor(private userService: UserService,
                private toastrService: ToastrService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.paramMapSubscription = this.route.paramMap.subscribe(async parMap => {
            this.showLoading = true;
            this.employeeId = parMap.get('employee_id');
            this.userService.sideNavEmployeeId.next(this.employeeId);
            try {
                this.accountDetails = await this.userService.getUserAccountDetails(this.employeeId);
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
