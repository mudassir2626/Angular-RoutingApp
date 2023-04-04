import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AdminDashboardComponent } from './module/components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './module/components/header/header.component';
import { MenuComponent } from './module/components/menu/menu.component';
import { ContactusComponent } from './module/components/contactus/contactus.component';
import { HomeComponent } from './module/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    HeaderComponent,
    MenuComponent,
    ContactusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
