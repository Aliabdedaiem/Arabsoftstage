import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { EspaceEntrepriseComponent } from './components/espace-entreprise/espace-entreprise.component';
import { OffersformComponent } from './components/offersform/offersform.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'offers',
        component: OffersComponent
    },
    {
        path: 'offersform',
        component: OffersformComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'espentrprise',
        component: EspaceEntrepriseComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }