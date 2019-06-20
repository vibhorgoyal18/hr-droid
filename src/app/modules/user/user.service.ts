import {Injectable} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Subject} from 'rxjs';
import {UserInfoModel} from '../../models/user.model';

@Injectable()
export class UserService {

    public userInfo: Subject<UserInfoModel> = new Subject();

    constructor(private httpService: HttpService) {
    }

    async addUser() {
    }
}
