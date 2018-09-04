import { Component, OnInit } from '@angular/core';
import {UserService} from './user-service';
import {NotificationsService} from '../services/notifications.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  constructor(private userService: UserService, private notification: NotificationsService) { }
  user = {
    FirstName: 'First Name',
    LastName : 'Last Name',
    Email : 'Email@Mail.com',
    Address: 'some address some place',
    City: 'some city in the world',
    Country: 'some country ',
    PostalCode: 111111,
    Comments: 'some comments',
    Company: 'Google',
    userName : 'userName'
  };
  ngOnInit() {
    // this.userService.getUserProfileById().subscribe((user) => {
    //   console.log(user.data);
    //   this.user = user.data;
    // });


      this.notification.showNotification('bottom', 'center');


  }

  print() {
    console.log(this.user);
  }

}
