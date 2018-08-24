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
  user;
  ngOnInit() {
    this.userService.getUserProfileById().subscribe((user) => {
      console.log(user.data);
      this.user = user.data;
    });

    if(this.user === undefined) {
      this.notification.showNotification('bottom', 'center');
    }
  }

  print() {
    console.log(this.user);
  }

}
