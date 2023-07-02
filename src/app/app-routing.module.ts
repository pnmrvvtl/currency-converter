import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage, MainPage, ErrorPage } from './views';

const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'about', component: AboutPage },
  { path: '**', component: ErrorPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
