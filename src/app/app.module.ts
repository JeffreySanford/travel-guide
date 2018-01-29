import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './template/app-routing/app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { RegisterComponent } from './page/register/register.component';
import { LandingComponent } from './page/landing/landing.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SuccessfulSubmissionComponent } from './page/register/successful-submission/successful-submission.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LandingComponent,
    SuccessfulSubmissionComponent
  ],
  imports: [
    NgbModule.forRoot(),
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
