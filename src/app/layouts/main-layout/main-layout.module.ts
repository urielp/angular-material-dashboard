import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule
} from '@angular/material';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserprofileComponent } from '../../userprofile/userprofile.component';
import {MainLayoutRoute} from './aminLayoutRoutes';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from '../../userprofile/user-service';
import {NotificationsService} from '../../services/notifications.service';
import { SignupComponent } from '../../auth/signup/signup.component';
import { SigninComponent } from '../../auth/signin/signin.component';
import {AuthService} from '../../auth/authenticate.service';
import {AuthGuard} from '../../auth/auth-guard.service';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {CardlistComponent} from '../../shared/cardlist/cardlist.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoute),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    UserprofileComponent,
    SignupComponent,
    PaginationComponent,
    CardlistComponent,
   // SigninComponent,
  ],
  providers: [ UserService, NotificationsService, AuthService, AuthGuard ],
})

export class MainLayoutModule {}
