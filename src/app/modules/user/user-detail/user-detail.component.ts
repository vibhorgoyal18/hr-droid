import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {AddressDetailModel, UserDetailModel} from '../../../models/user.model';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

    userDetails: UserDetailModel;
    showLoading: boolean;
    residentialAddress: AddressDetailModel;
    permanentAddress: AddressDetailModel;
    employeeId: string;
    paramMapSubscription: Subscription;

    constructor(private userService: UserService,
                private toastrService: ToastrService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.paramMapSubscription = this.route.paramMap.subscribe(async parMap => {
            this.employeeId = parMap.get('employee_id');
            this.userService.sideNavEmployeeId.next(this.employeeId);
            this.showLoading = true;
            try {
                this.userDetails = await this.userService.getUserDetails(this.employeeId);
                this.userDetails.address_details.forEach(address => {
                    if (address.address_type === 'PERMANENT') {
                        this.permanentAddress = address;
                    } else if (address.address_type === 'RESIDENTIAL') {
                        this.residentialAddress = address;
                    }
                });
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
