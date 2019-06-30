import {Injectable} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {BehaviorSubject, Subject} from 'rxjs';
import {UserInfoModel} from '../../models/user.model';

@Injectable()
export class UserService {

    public userInfo: BehaviorSubject<UserInfoModel> = new BehaviorSubject(null);

    constructor(private httpService: HttpService) {
    }

    async addUser() {
    }

    async getLoggedInUserInfo() {

        await this.httpService.get('user/me/info')
            .then((userInfo: UserInfoModel) => {
                this.userInfo.next(userInfo);
            })
            .catch(error => {
                console.log(error);
            });
    }
}
