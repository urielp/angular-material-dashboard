import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  isUserLoggedIn = false;


  login() {
    this.isUserLoggedIn = true;
    localStorage.setItem('auth', 'true');
    console.log('is user -' + this.isUserLoggedIn );
  }

  getUserStatus() {
    console.log(localStorage.getItem('auth'));
    return localStorage.getItem('auth'); // this.isUserLoggedIn;
}
}

