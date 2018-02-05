
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';

import { LandingComponent } from '../../page/landing/landing.component';
import { LoginComponent } from '../../page/landing/login/login.component';
import { RegisterComponent } from '../../page/landing/register/register.component';
import { SuccessfulSubmissionComponent } from '../../page/landing/register/successful-submission/successful-submission.component';

import { GuestComponent } from '../../page/guest/guest.component';
import { SelectedGuideComponent } from '../../page/guest/selected-guide/selected-guide.component';

import { HostComponent } from '../../page/host/host.component';

const ROUTES: Routes = [
    { path: 'landing', component: LandingComponent},
    { path: 'login', component: RegisterComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'register/successful-submission', component: SuccessfulSubmissionComponent},
    { path: 'register/successful-submission/:name', component: SuccessfulSubmissionComponent},
    { path: 'guest', component: GuestComponent},
    { path: 'guest/:id', component: SelectedGuideComponent},
    { path: 'host', component: HostComponent},
    { path: '**', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {useHash: true})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
