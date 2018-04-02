import { NgModule } from '@angular/core'
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { AdminCubiclesComponent } from '../admin-cubicles/admin-cubicles.component';
import { AdminCareersComponent } from '../admin-careers/admin-careers.component';
import { AdminDepartmentsComponent } from '../admin-departments/admin-departments.component';
import { AdminUsersUpdateComponent } from '../admin-users/admin-users-update/admin-users-update.component';
import { AdminCubiclesUpdateComponent } from '../admin-cubicles/admin-cubicles-update/admin-cubicles-update.component';
import { AdminCareersUpdateComponent } from '../admin-careers/admin-careers-update/admin-careers-update.component';
import { AdminDepartmentsUpdateComponent } from '../admin-departments/admin-departments-update/admin-departments-update.component';
import { AdminReportsComponent } from '../admin-reports/admin-reports.component';
import { AdminEmployeesComponent } from '../admin-employees/admin-employees.component';
import { AdminEmployeesUpdateComponent } from '../admin-employees/admin-employees-update/admin-employees-update.component';
import { AdminExternalUserComponent } from '../admin-external-user/admin-external-user.component';
import { AdminExternalUserUpdateComponent } from '../admin-external-user/admin-external-user-update/admin-external-user-update.component';

const adminRoutes: Routes = [{ // Admin routes
  path: 'admin-site',
  component: AdminComponent, // '/admin-site' path
  children: [
    { path: '', component: AdminHomeComponent }, // '/admin-site' path
    { path: 'users', component: AdminUsersComponent }, // '/admin-site/users' path
    { path: 'users/:id', component: AdminUsersUpdateComponent }, // '/admin-site/users/id' path
    { path: 'cubicles', component: AdminCubiclesComponent }, // '/admin-site/cubicles' path
    { path: 'cubicles/:id', component: AdminCubiclesUpdateComponent }, // '/admin-site/cubicles/id' path
    { path: 'careers', component: AdminCareersComponent }, // '/admin-site/careers' path
    { path: 'careers/:id', component: AdminCareersUpdateComponent }, // '/admin-site/careers/id' path
    { path: 'departments', component: AdminDepartmentsComponent },// '/admin-site/departments' path
    { path: 'departments/:id', component: AdminDepartmentsUpdateComponent }, // '/admin-site/departments/id' path
    { path: 'employees', component: AdminEmployeesComponent }, // '/admin-site/employees' path
    { path: 'employees/:id', component: AdminEmployeesUpdateComponent }, // '/admin-site/employees/id' path
    { path: 'externals', component: AdminExternalUserComponent }, // '/admin-site/externals' path
    { path: 'externals/:id', component: AdminExternalUserUpdateComponent }, // '/admin-site/externals/id' path
    { path: 'reports', component: AdminReportsComponent } // '/admin-site/reports'
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AdminRoutingModule {

}
