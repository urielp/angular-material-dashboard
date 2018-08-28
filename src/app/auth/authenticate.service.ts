import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  isUserLoggedIn = false;


  login() {
    this.isUserLoggedIn = true;
    console.log("is user -" + this.isUserLoggedIn );
  }

  getUserStatus() {
    return this.isUserLoggedIn;
}
}

