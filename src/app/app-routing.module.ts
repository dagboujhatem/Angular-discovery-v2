import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { Page404Component } from './components/page404/page404.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch : 'full'
  },
  {
    path:'list',
    component: EmployeeListComponent
  },
  {
    path:'create',
    component: CreateEmployeeComponent
  },
  {
    path:'update/:id',
    component: UpdateEmployeeComponent
  },
  {
    path:'**',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
