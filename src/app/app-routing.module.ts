import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage, MainPage } from './views';

const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'about', component: AboutPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
