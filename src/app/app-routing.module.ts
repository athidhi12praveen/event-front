import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./Modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'users/:userid',
    loadChildren: () =>
      import('./Modules/users/users.module').then((m) => m.UsersModule),
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
