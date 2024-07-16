import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { UserlistComponent } from './userlist/userlist.component';
import { UserCreateComponent } from './userlist/user-create/user-create.component';
import { setBackgroundDerictive } from './CustomDerictives/app.derictives';
import { NewComponentComponent } from './new-component/new-component.component';
import { CustomStructuralDerictiveDirective } from './CustomDerictives/custom-structural-derictive.directive';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserDetailsComponent } from './user.details/user.details.component';
import { UserRoleGuard } from './user-role-guard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserCreateComponent,
    setBackgroundDerictive,
    NewComponentComponent,
    CustomStructuralDerictiveDirective,
    SideNavbarComponent,
    WelcomePageComponent,
    UserDetailsComponent,
    HeaderComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    UserRoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
