import {Injectable} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {AuthRequestModel, AuthResponseModel} from '../../../models/auth.model';
import {UserService} from '../../user/user.service';

@Injectable()
export class LoginService {


    constructor(
        private httpService: HttpService,
        private userService: UserService
    ) {
    }

    login = (credentials: AuthRequestModel) => new Promise((resolve, reject) => {
        this.httpService.post('api-auth/obtain-token', credentials)
            .then((data: AuthResponseModel) => {
                    localStorage.setItem('token', data.token);
                    resolve();
                },
                error => {
                    reject(error);
                }).catch(error => {
            reject(error);
        });
    });
}
