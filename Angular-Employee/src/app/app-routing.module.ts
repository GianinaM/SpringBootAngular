import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './services/authGaurd/auth-gaurd.service';
import { RegisterComponent } from './components/register/register.component';
import { TestFormComponent } from './components/test-form/test-form.component';


const routes: Routes = [

  { path: '', redirectTo: 'employees', pathMatch: 'full', canActivate:[AuthGaurdService] },
  { path: 'employees', component: EmployeeListComponent, canActivate:[AuthGaurdService] },
  { path: 'add', component: EmployeeCreateComponent, canActivate:[AuthGaurdService] },
  { path: 'update/:id', component: EmployeeUpdateComponent, canActivate:[AuthGaurdService] },
  { path: 'details/:id', component: EmployeeDetailsComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
  { path: 'register', component: RegisterComponent},
  { path: 'testForm', component: TestFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
