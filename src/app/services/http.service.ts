import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ResponseModel} from '../models/response.model';

@Injectable()
export class HttpService {

    private apiBaseURL = environment.apiBaseURL;

    constructor(private httpClient: HttpClient) {
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
                reject(error.error.message);
            }
        );
    });
}
