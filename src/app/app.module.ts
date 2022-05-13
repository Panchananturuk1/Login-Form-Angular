import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HeaderComponent } from './header/header.component';

// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,

    HeaderComponent,
    routingComponents,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
