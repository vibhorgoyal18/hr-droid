import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {AuthRequestModel} from '../../../models/auth.model';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: AuthRequestModel;
  showLoading: boolean;
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private toastrService: ToastrService,
    private router: Router) {
    this.loginForm = this.createLoginFormGroup();
  }

  ngOnInit() {
  }

  createLoginFormGroup = () => new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  async login() {
    this.loginForm.markAllAsTouched();
    this.showLoading = true;
    if (this.loginForm.get('email').errors || this.loginForm.get('password').errors) {
      this.toastrService.error('Please fill the fields correctly', 'Error');
      this.showLoading = false;
    } else {
      try {
        this.credentials = {
          email: this.loginForm.get('email').value,
          password: this.loginForm.get('password').value
        };
        await this.loginService.login(this.credentials);
        this.toastrService.success('Login Successful', 'Success');
        this.router.navigate(['home']);
      } catch (e) {
        this.toastrService.error('Invalid Credentials', 'Error');
      } finally {
        this.showLoading = false;
      }
    }
  }
}
