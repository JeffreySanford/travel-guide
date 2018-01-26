
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

import { LandingComponent } from '../landing/landing.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
    { path: 'landing', component: LandingComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
