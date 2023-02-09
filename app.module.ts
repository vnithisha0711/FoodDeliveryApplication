import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './_Components/contact-us/contact-us.component';
import { AboutUsComponent } from './_Components/about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './_Components/navbar/navbar.component';

import { LoginComponent } from './_Components/login/login.component';
import { SignUpComponent } from './_Components/sign-up/sign-up.component';
import { AdminComponent } from './_Components/admin/admin.component';
import { RestaurantpageComponent } from './_Components/restaurantpage/restaurantpage.component';
import { CustomerpageComponent } from './_Components/customerpage/customerpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    LoginComponent,
    SignUpComponent,
    RestaurantpageComponent,
    CustomerpageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
