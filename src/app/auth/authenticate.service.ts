import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  isUserLoggedIn = false;


  login() {
    this.isUserLoggedIn = true;
  }

  getUserStatus() {
    return this.isUserLoggedIn;
}
}

