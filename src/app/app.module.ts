import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ComponentsModule} from './components/componets.module';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {AppRoutingModule, MainRoute} from './RouteBasic';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './userprofile/user-service';
import {HttpClientModule} from '@angular/common/http';
import {NotificationsService} from './services/notifications.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/authenticate.service';
import {AuthGuard} from './auth/auth-guard.service';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CardlistComponent } from './shared/cardlist/cardlist.component';


@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // UserprofileComponent,
    // SignupComponent,
    SigninComponent,
    MainLayoutComponent,


  ],
  imports: [
    //HttpClientModule,
    //BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    // MatInputModule,
    MatButtonModule,
     MatRippleModule,
     MatInputModule,
     MatDividerModule,
    // MatTooltipModule,
    MatIconModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
    //RouterModule.forRoot(MainRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
