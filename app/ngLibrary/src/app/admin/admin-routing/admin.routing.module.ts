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

const adminRoutes: Routes = [{
  path: 'admin-site',
  component: AdminComponent,
  children: [
    {path: '', component: AdminHomeComponent},
    {path: 'users', component: AdminUsersComponent},
    {path: 'users/:id', component: AdminUsersUpdateComponent},
    {path: 'cubicles', component: AdminCubiclesComponent},
    {path: 'cubicles/:id', component: AdminCubiclesUpdateComponent},
    {path: 'careers', component: AdminCareersComponent},
    {path: 'careers/:id', component: AdminCareersUpdateComponent},
    {path: 'departments', component: AdminDepartmentsComponent},
    {path: 'departments/:id', component: AdminDepartmentsUpdateComponent},
    {path: 'employees', component: AdminEmployeesComponent},
    {path: 'employees/:id', component: AdminEmployeesUpdateComponent},
    {path: 'externals', component: AdminExternalUserComponent},
    {path: 'externals/:id', component: AdminExternalUserUpdateComponent},
    {path: 'reports', component: AdminReportsComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' } // Route in case page is not found

    // {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]

}
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
