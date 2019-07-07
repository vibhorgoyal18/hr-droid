import {Injectable} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {BehaviorSubject, Subject} from 'rxjs';
import {AccountDetailsModel, UserDetailModel, UserInfoModel} from '../../models/user.model';

@Injectable()
export class UserService {

    public userInfo: BehaviorSubject<UserInfoModel> = new BehaviorSubject(null);
    public sideNavEmployeeId: Subject<string> = new Subject();

    constructor(private httpService: HttpService) {
    }

    async addUser() {
    }

    getLoggedInUserInfo = () => new Promise<UserInfoModel>((resolve, reject) => {

        this.httpService.get('user/info', {employee_id: 'me'})
            .then((userInfo: UserInfoModel) => {
                    this.userInfo.next(userInfo);
                    resolve();
                },
                (error) => reject(error))
            .catch((error) => reject(error));
    });

    getUserInfo = (employeeId: string) => new Promise<UserInfoModel>((resolve, reject) => {

        this.httpService.get('user/info', {employee_id: employeeId})
            .then((userInfo: UserInfoModel) => {
                    resolve(userInfo);
                },
                (error) => reject(error))
            .catch((error) => reject(error));
    });

    getAllUserInfo = () => new Promise<UserInfoModel[]>((resolve, reject) => {

        this.httpService.get('user/all')
            .then((allUserInfo: UserInfoModel[]) => {
                    resolve(allUserInfo);
                },
                (error) => reject(error))
            .catch((error) => reject(error));
    });

    getUserDetails = (employeeId: string) => new Promise<UserDetailModel>((resolve, reject) => {
        this.httpService.get('user/details', {employee_id: employeeId})
            .then((data: UserDetailModel) => {
                    resolve(data);
                },
                (error) => reject(error))
            .catch((error) => reject(error));
    });

    getUserAccountDetails = (employeeId: string) => new Promise<AccountDetailsModel>((resolve, reject) => {
        this.httpService.get('user/account-details', {employee_id: employeeId})
            .then((data: AccountDetailsModel) => {
                    resolve(data);
                },
                (error) => reject(error))
            .catch((error) => reject(error));
    });
}
