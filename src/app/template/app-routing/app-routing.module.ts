
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';

import { LandingComponent } from '../../page/landing/landing.component';
import { RegisterComponent } from '../../page/register/register.component';
import { SuccessfulSubmissionComponent } from '../../page/register/successful-submission/successful-submission.component';


const ROUTES: Routes = [
    { path: 'landing', component: LandingComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'register/successful-submission', component: SuccessfulSubmissionComponent},
    { path: 'register/successful-submission/:name', component: SuccessfulSubmissionComponent},
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
