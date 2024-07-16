// Import necessary modules
import { Routes } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { UserlistComponent } from './userlist/userlist.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserCreateComponent } from './userlist/user-create/user-create.component';
import { UserDetailsComponent } from './user.details/user.details.component';
import { UserRoleGuard } from './user-role-guard';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';


// Define your routes array
export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'users', component: UserlistComponent },
  { path: 'form', component: FormComponent },
  { path: 'createUser', component: UserCreateComponent , canActivate : [UserRoleGuard]},
  { path: 'GetUser/:id', component: UserDetailsComponent }
];
