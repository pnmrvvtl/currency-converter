// libs
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// services
import { CurrencyService } from './services';
// components
import { Converter, Footer, Header, Loader } from './components';
import { AboutPage, MainPage } from './views';

@NgModule({
  declarations: [AppComponent, Header, Footer, MainPage, AboutPage, Loader, Converter],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
