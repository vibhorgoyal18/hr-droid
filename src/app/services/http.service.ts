import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ResponseModel} from '../models/response.model';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class HttpService {

    private apiBaseURL = environment.apiBaseURL;

    constructor(private httpClient: HttpClient,
                private router: Router,
                private toastrService: ToastrService
    ) {
    }

    private httpHeader(): any {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                return {
                    'content-Type': '*/*',
                    Authorization: 'MYD ' + token,
                    Accept: '*/*'
                };
            } else {
                return {
                    'content-Type': '*/*',
                    Accept: '*/*'
                };
            }
        } catch (err) {
            console.error(err);
        }
    }

    get = (urlPath: string, params = {}) => new Promise((resolve, reject) => {
        return this.httpClient.get(this.apiBaseURL + urlPath, {
            headers: this.httpHeader(),
            params
        }).subscribe(
            (response: ResponseModel<any>) => {
                resolve(response.data);
            },
            error => {
                if (error.status === 401) {
                    this.router.navigate(['login'])
                        .then(() => {
                            this.toastrService.info('Session expired. Please login again');
                            localStorage.removeItem('token');
                        });
                }
                reject(error.error.message);
            });
    });

    post = (urlPath: string, body: any, params = {}) => new Promise((resolve, reject) => {
        this.httpClient.post(this.apiBaseURL + urlPath, body, {
            headers: this.httpHeader(),
            params
        }).subscribe(
            (response: ResponseModel<any>) => {
                resolve(response.data);
            },
            error => {
                if (error.status === 401) {
                    this.router.navigate(['login'])
                        .then(() => {
                            this.toastrService.info('Session expired. Please login again');
                            localStorage.removeItem('token');
                        });
                }
                reject(error.error.message);
            }
        );
    });
}
