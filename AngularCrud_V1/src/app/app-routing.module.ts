import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employeeDashboard/employee-dashboard/employee-dashboard.component';
import { EmployeeAddComponent } from './employeeDashboard/employee-dashboard/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employeeDashboard/employee-dashboard/employee-update/employee-update.component';

const routes: Routes = [
  {path:'employeeDashboard',component:EmployeeDashboardComponent},
  {path:'employeeAdd',component:EmployeeAddComponent},
  {path:'employeeUpdate/:id',component:EmployeeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeDashboardComponent,EmployeeAddComponent,EmployeeUpdateComponent]