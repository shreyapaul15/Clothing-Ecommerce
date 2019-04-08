import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterServices } from './register/register.services';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'newuserreg',
        component: RegisterComponent
      },
    ])
  ],
  providers: [RegisterServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
