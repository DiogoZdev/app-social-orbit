import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.component';
import { HomePage } from './pages/home/home.component';
import { ConfigPage } from './pages/config/config.component';

const routes: Routes = [
  {path: '', component: LoginPage},
  {path: 'home', component: HomePage},
  {path: 'blog', component: ConfigPage},
  {path: 'projects', component: ConfigPage},
  {path: 'settings', component: ConfigPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
