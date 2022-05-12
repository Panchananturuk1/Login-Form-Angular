import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigunpComponent } from './sigunp/sigunp.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SigunpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, SigunpComponent]
