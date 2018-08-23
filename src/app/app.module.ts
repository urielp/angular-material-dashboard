import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTooltipModule} from '@angular/material';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ComponentsModule} from './components/componets.module';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {MainRoute} from './RouteBasic';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserprofileComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forRoot(MainRoute)

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
