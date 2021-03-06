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
import { AdminEmployeesComponent } from './admin-employees/admin-employees.component';
import { AdminEmployeesUpdateComponent } from './admin-employees/admin-employees-update/admin-employees-update.component';
import { EmployeesService } from '../services/employees/employees.service';
import { PipesModule } from '../pipes/pipes.module';
import { AdminExternalUserComponent } from './admin-external-user/admin-external-user.component';
import { AdminExternalUserUpdateComponent } from './admin-external-user/admin-external-user-update/admin-external-user-update.component';
import { ExternalUserService } from '../services/externalUser/external-user.service';
import { NguiPopupModule } from '@ngui/popup';
import { AdminDataService } from '../services/adminData/admin-data.service';

@NgModule({
  imports: [ // All modules
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    HttpModule,
    NgxPaginationModule,
    ChartsModule,
    NguiPopupModule,
    PipesModule.forRoot()
  ],
  declarations: [ // All components
    AdminComponent,
    AdminHomeComponent,
    AdminUsersComponent,
    AdminCareersComponent,
    AdminCubiclesComponent,
    AdminDepartmentsComponent,
    AdminCubiclesUpdateComponent,
    AdminCareersUpdateComponent,
    AdminDepartmentsUpdateComponent,
    AdminUsersUpdateComponent,
    AdminReportsComponent,
    AdminEmployeesComponent,
    AdminEmployeesUpdateComponent,
    AdminExternalUserComponent,
    AdminExternalUserUpdateComponent
  ],
  providers: [ // All services
    UsersService,
    CubiclesService,
    CareersService,
    ReportsService,
    DepartmentsService,
    SettingsService,
    EmployeesService,
    ExternalUserService,
    AdminDataService
  ]
})
export class AdminModule { }
