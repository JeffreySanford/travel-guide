import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './template/app-routing/app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// Angular Google Maps (AGM)
// https://github.com/SebastianM/angular-google-maps
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';

import { LandingComponent } from './page/landing/landing.component';
import { RegisterComponent } from './page/landing/register/register.component';
import { LoginComponent } from './page/landing/login/login.component';
import { SuccessfulSubmissionComponent } from './page/landing/register/successful-submission/successful-submission.component';

import { GuestComponent } from './page/guest/guest.component';

import { HostComponent } from './page/host/host.component';
import { AgmComponent } from './page/guest/agm/agm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LandingComponent,
    SuccessfulSubmissionComponent,
    GuestComponent,
    HostComponent,
    LoginComponent,
    AgmComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARWHCCJAgTn9yppmd9hUuVQeXzlhsfYec&libraries=places'
    }),
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
