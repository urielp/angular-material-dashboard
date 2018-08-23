import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserprofileComponent} from './userprofile/userprofile.component';


export const MainRoute: Routes = [
  { path: 'dashboard' ,   component: DashboardComponent },
  { path: 'user-profile' , component: UserprofileComponent }
];
