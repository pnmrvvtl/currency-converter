// libs
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// routing
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// services
import { AuthService, CurrencyService } from './services';
// components
import { Authentication, Converter, Footer, Header, Loader, Registration } from './components';
import { AboutPage, AuthPage, ErrorPage, MainPage } from './views';
// environment
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    MainPage,
    AboutPage,
    Loader,
    Converter,
    ErrorPage,
    Authentication,
    Registration,
    AuthPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [CurrencyService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
