import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';


const routes: Routes = [

  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: EmployeeCreateComponent },
  { path: 'update/:id', component: EmployeeUpdateComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
