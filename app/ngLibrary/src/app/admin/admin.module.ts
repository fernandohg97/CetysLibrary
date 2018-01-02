import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCareersComponent } from './admin-careers/admin-careers.component';
import { AdminCubiclesComponent } from './admin-cubicles/admin-cubicles.component';
import { UsersService } from '../services/users/users.service';
import { CubiclesService } from '../services/cubicles/cubicles.service';
import { CareersService } from '../services/careers/careers.service';
import { DepartmentsService } from '../services/departments/departments.service';
import { AdminDepartmentsComponent } from './admin-departments/admin-departments.component';
import { SearchCubiclePipe } from '../pipes/searchCubicle/search-cubicle.pipe';
import { SearchCareerPipe } from '../pipes/searchCareer/search-career.pipe';
import { SearchUserPipe } from '../pipes/searchUser/search-user.pipe';
import { SearchDepartmentPipe } from '../pipes/searchDepartment/search-department.pipe';
import { AdminCubiclesUpdateComponent } from './admin-cubicles/admin-cubicles-update/admin-cubicles-update.component';
import { AdminCareersUpdateComponent } from './admin-careers/admin-careers-update/admin-careers-update.component';
import { AdminDepartmentsUpdateComponent } from './admin-departments/admin-departments-update/admin-departments-update.component';
import { AdminUsersUpdateComponent } from './admin-users/admin-users-update/admin-users-update.component';
import { AdminRoutingModule } from './admin-routing/admin.routing.module';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { ReportsService } from '../services/reports/reports.service';
import { SettingsService } from '../services/settings/settings.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    HttpModule,
    NgxPaginationModule,
    ChartsModule
  ],
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminUsersComponent,
    AdminCareersComponent,
    AdminCubiclesComponent,
    AdminDepartmentsComponent,
    SearchCubiclePipe,
    SearchCareerPipe,
    SearchDepartmentPipe,
    AdminCubiclesUpdateComponent,
    AdminCareersUpdateComponent,
    AdminDepartmentsUpdateComponent,
    AdminUsersUpdateComponent,
    AdminReportsComponent,
    SearchUserPipe
  ],
  providers: [
    UsersService,
    CubiclesService,
    CareersService,
    ReportsService,
    DepartmentsService,
    SettingsService
  ]
})
export class AdminModule { }
