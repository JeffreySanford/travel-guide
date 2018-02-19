import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './layout/app-routing/app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule, MatListModule, MatDialogModule, MatInputModule, MatDialogRef, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// Angular Google Maps (AGM)
// https://github.com/SebastianM/angular-google-maps
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { LandingComponent } from './page/landing/landing.component';
import { LoginComponent } from './page/user/login/login.component';
import { RegisterComponent } from './page/user/register/register.component';
import { SuccessfulSubmissionComponent } from './page/user/register/successful-submission/successful-submission.component';

import { GuestComponent } from './page/guest/guest.component';

import { HostComponent } from './page/host/host.component';
import { AgmComponent } from './page/guest/agm/agm.component';
import { SelectedGuideComponent } from './page/guest/selected-guide/selected-guide.component';

import { GuestService } from './services/guests.service';
import { VendorsService } from './services/vendors.service';
import { GuideService } from './services/guides.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
/** Mock httpd service */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    GuestComponent,
    HostComponent,
    LoginComponent,
    RegisterComponent,
    SuccessfulSubmissionComponent,
    SelectedGuideComponent,
    AgmComponent,
    MessagesComponent
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
    ReactiveFormsModule,
    MatGridListModule, MatListModule, MatDialogModule, MatInputModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports:[
    MatDialogModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule
  ],
  providers: [ HttpClientModule, GuestService, GuideService, VendorsService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
