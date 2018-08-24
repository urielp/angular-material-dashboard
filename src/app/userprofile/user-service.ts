import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {


  constructor(private httpClient: HttpClient) {

  }

  getUserProfileById(): Observable<any> {
    try {
      return this.httpClient.get<any>('http://localhost:8080/investor/investor/5b1beb4d0a5c222bb05536d2');
    } catch (e) {
      console.log(e.message);
    }
  }
}
