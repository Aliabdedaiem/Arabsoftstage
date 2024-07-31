import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule, routes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { BadgeModule } from 'primeng/badge';
import { FooterComponent } from './components/home/footer/footer.component';
import { OffersComponent } from './components/offers/offers.component';
import { OffersformComponent } from './components/offersform/offersform.component';
import { ModelComponent } from './components/model/model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    BadgeModule,
    FooterComponent,
    OffersComponent,
    OffersformComponent,
    ModelComponent,
    CommonModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)

    ],
  providers: [MessageService,ToastrService],
  bootstrap: []
})
export class AppModule { }