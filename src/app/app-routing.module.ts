import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage, MainPage, ErrorPage, AuthPage } from './views';

const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'about', component: AboutPage },
  { path: 'auth', component: AuthPage },
  { path: '**', component: ErrorPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
