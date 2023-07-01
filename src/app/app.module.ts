import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyService } from './services';
import { Footer, Header } from './components';
import { AboutPage, MainPage } from './views';

@NgModule({
  declarations: [AppComponent, Header, Footer, MainPage, AboutPage],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
