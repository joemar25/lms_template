import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { passwordResponse, register } from 'src/app/shared/models/register.model';
import { routes } from 'src/app/shared/service/routes/routes';
import { newPassword } from 'src/app/shared/models/model';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent {
  public routes = routes;
  password = 'password';
  show1 = true;

  confirmPassword = 'password';
  show2 = true;

  public registerForm: register = {
    img: undefined,
    content1: undefined,
    content2: undefined,
    paragraph: undefined,
  };
  registerFormCustom: {
    password: string;
    confirmPassword: string;
  } = {
    password: '',
    confirmPassword: '',
  };
  public passwordResponse: passwordResponse = {};
  public confirmPasswordResponse: passwordResponse = {};
  public newPassword: newPassword[] = [];

  public newPasswordOwlOptions: OwlOptions = {
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

  constructor(private DataService: DataService) {
    this.newPassword = this.DataService.newPassword;
  }

  onClick(type: string) {
    if (type === 'password') {
      if (this.password === 'password') {
        this.password = 'text';
        this.show1 = false;
      } else {
        this.password = 'password';
        this.show1 = true;
      }
    } else {
      if (this.confirmPassword === 'password') {
        this.confirmPassword = 'text';
        this.show2 = false;
      } else {
        this.confirmPassword = 'password';
        this.show2 = true;
      }
    }
  }

  public onChangePassword(password: string, type: string) {
    if (type === 'Password') {
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
        this.passwordResponse.passwordResponseImage =
          'assets/img/icon/angry.svg';
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
        this.passwordResponse.passwordResponseImage =
          'assets/img/icon/smile.svg';
        this.passwordResponse.passwordResponseKey = '2';
      } else {
        this.passwordResponse.passwordResponseText =
          'Awesome! You have a secure password.';
        this.passwordResponse.passwordResponseImage =
          'assets/img/icon/smile.svg';
        this.passwordResponse.passwordResponseKey = '3';
      }
    } else {
      if (password.match(/^$|\s+/)) {
        this.confirmPasswordResponse.passwordResponseText =
          'whitespaces are not allowed';
        this.confirmPasswordResponse.passwordResponseImage = '';
        this.confirmPasswordResponse.passwordResponseKey = '';
        return;
      }
      if (password.length == 0) {
        this.confirmPasswordResponse.passwordResponseText = '';
        this.confirmPasswordResponse.passwordResponseImage = '';
        this.confirmPasswordResponse.passwordResponseKey = '';
        return;
      }
      if (password.length < 8) {
        this.confirmPasswordResponse.passwordResponseText =
          'Weak. Must contain at least 8 characters';
        this.confirmPasswordResponse.passwordResponseImage =
          'assets/img/icon/angry.svg';
        this.confirmPasswordResponse.passwordResponseKey = '0';
      } else if (password.search(/[a-z]/) < 0) {
        this.confirmPasswordResponse.passwordResponseText =
          'Average. Must contain at least 1 upper case and number';
        this.confirmPasswordResponse.passwordResponseImage =
          'assets/img/icon/anguish.svg';
        this.confirmPasswordResponse.passwordResponseKey = '1';
      } else if (password.search(/[A-Z]/) < 0) {
        this.confirmPasswordResponse.passwordResponseText =
          'Average. Must contain at least 1 upper case and number';
        this.confirmPasswordResponse.passwordResponseImage =
          'assets/img/icon/anguish.svg';
        this.confirmPasswordResponse.passwordResponseKey = '1';
      } else if (password.search(/[0-9]/) < 0) {
        this.confirmPasswordResponse.passwordResponseText =
          'Average. Must contain at least 1 upper case and number';
        this.confirmPasswordResponse.passwordResponseImage =
          'assets/img/icon/anguish.svg';
        this.confirmPasswordResponse.passwordResponseKey = '1';
      } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
        this.confirmPasswordResponse.passwordResponseText =
          'Almost. Must contain special symbol';
        this.confirmPasswordResponse.passwordResponseImage =
          'assets/img/icon/smile.svg';
        this.confirmPasswordResponse.passwordResponseKey = '2';
      } else {
        this.confirmPasswordResponse.passwordResponseText =
          'Awesome! You have a secure password.';
        this.confirmPasswordResponse.passwordResponseImage =
          'assets/img/icon/smile.svg';
        this.confirmPasswordResponse.passwordResponseKey = '3';
      }
    }
  }
  typingStarted1 = false;
  typingStarted2 = false;

  onInputChange1() {
    this.typingStarted1 = true;
  }

  onInputChange2() {
    this.typingStarted2 = true;
  }
}
