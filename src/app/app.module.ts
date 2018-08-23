import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ComponentsModule} from './components/componets.module';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    ComponentsModule

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
