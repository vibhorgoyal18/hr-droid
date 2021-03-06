import {Injectable} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {AuthRequestModel, AuthResponseModel} from '../../../models/auth.model';

@Injectable()
export class LoginService {

    constructor(
        private httpService: HttpService,
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
