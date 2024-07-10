// src/app/auth/register-page/register/register.component.ts
import { Component } from '@angular/core';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { passwordResponse, register } from 'src/app/shared/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public routes = routes;
  email: string = '';
  passwordInput: string = '';
  errorMessage: string | null = null;

  public registerForm: register = {
    img: undefined,
    content1: undefined,
    content2: undefined,
    paragraph: undefined,
  };
  public passwordResponse: passwordResponse = {};

  public register: register[] = [];

  password = 'password';
  show = true;

  public registerOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };

  constructor(
    private dataService: DataService,
    private supabaseService: SupabaseService
  ) {
    this.register = this.dataService.register;
  }

  onClick() {
    this.password = this.password === 'password' ? 'text' : 'password';
    this.show = !this.show;
  }

  async registerUser() {
    try {
      const user = await this.supabaseService.signUp(
        this.email,
        this.passwordInput
      );
      if (user) {
        console.log('User registered:', user);
      }
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'An unknown error occurred';
      }
    }
  }

  registerFormCustom: {
    password: string;
    confirmPassword: string;
  } = {
    password: '',
    confirmPassword: '',
  };

  public onChangePassword(password: string) {
    if (password.match(/^$|\s+/)) {
      this.passwordResponse.passwordResponseText =
        'whitespaces are not allowed';
      this.passwordResponse.passwordResponseImage = '';
      this.passwordResponse.passwordResponseKey = '';
      return;
    }
    if (password.length == 0) {
      this.passwordResponse.passwordResponseText = '';
      this.passwordResponse.passwordResponseImage = '';
      this.passwordResponse.passwordResponseKey = '';
      return;
    }
    if (password.length < 8) {
      this.passwordResponse.passwordResponseText =
        'Weak. Must contain at least 8 characters';
      this.passwordResponse.passwordResponseImage = 'assets/img/icon/angry.svg';
      this.passwordResponse.passwordResponseKey = '0';
    } else if (password.search(/[a-z]/) < 0) {
      this.passwordResponse.passwordResponseText =
        'Average. Must contain at least 1 upper case and number';
      this.passwordResponse.passwordResponseImage =
        'assets/img/icon/anguish.svg';
      this.passwordResponse.passwordResponseKey = '1';
    } else if (password.search(/[A-Z]/) < 0) {
      this.passwordResponse.passwordResponseText =
        'Average. Must contain at least 1 upper case and number';
      this.passwordResponse.passwordResponseImage =
        'assets/img/icon/anguish.svg';
      this.passwordResponse.passwordResponseKey = '1';
    } else if (password.search(/[0-9]/) < 0) {
      this.passwordResponse.passwordResponseText =
        'Average. Must contain at least 1 upper case and number';
      this.passwordResponse.passwordResponseImage =
        'assets/img/icon/anguish.svg';
      this.passwordResponse.passwordResponseKey = '1';
    } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      this.passwordResponse.passwordResponseText =
        'Almost. Must contain special symbol';
      this.passwordResponse.passwordResponseImage = 'assets/img/icon/smile.svg';
      this.passwordResponse.passwordResponseKey = '2';
    } else {
      this.passwordResponse.passwordResponseText =
        'Awesome! You have a secure password.';
      this.passwordResponse.passwordResponseImage = 'assets/img/icon/smile.svg';
      this.passwordResponse.passwordResponseKey = '3';
    }
  }

  typingStarted = false;

  onInputChange() {
    this.typingStarted = true;
  }
}
