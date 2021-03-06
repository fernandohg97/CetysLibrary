import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing/home.routing.module'
import { ReservationModule } from './reservation/reservation.module';
import { HomeComponent } from './home.component';
import { ReservationCreateComponent } from './reservation/reservation-create/reservation-create.component';
import { ReservationCreateExternalComponent } from './reservation/reservation-create/reservation-create-external/reservation-create-external.component';
import { ReservationUpdateComponent } from './reservation/reservation-update/reservation-update.component';
import { ReservationEditComponent } from './reservation/reservation-edit/reservation-edit.component';
import { CubiclesService } from '../services/cubicles/cubicles.service';
import { CareersService } from '../services/careers/careers.service';
import { DepartmentsService } from '../services/departments/departments.service';
import { UsersService } from '../services/users/users.service';
import { SettingsService} from '../services/settings/settings.service';
import { ReservationsService } from '../services/reservations/reservations.service';
import { UsersQuantityService } from '../services/usersQuantity/users.quantity.service';
import { DataReservationService } from '../services/dataReservation/data-reservation.service';
import { PipesModule } from '../pipes/pipes.module';
import { ExternalUserService } from '../services/externalUser/external-user.service';
import { CompanionsService} from '../services/companions/companions.service';
import { MainHomeComponent } from './main-home/main-home.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { ReportsComponent } from './reports/reports.component';
import { HomeDialogsModule } from './home-dialogs/home-dialogs.module';
import { AdminDataService } from '../services/adminData/admin-data.service';

@NgModule({
  imports: [ // All modules
    CommonModule,
    HttpModule,
    FormsModule,
    ReservationModule,
    HomeRoutingModule,
    NgxPaginationModule,
    HomeDialogsModule,
    PipesModule.forRoot()
  ],
  declarations: [ // All components
    HomeComponent,
    ReservationCreateComponent,
    ReservationUpdateComponent,
    ReservationEditComponent,
    ReportsComponent,
    ReservationCreateExternalComponent,
    MainHomeComponent
  ],
  providers: [ // All services
    CubiclesService,
    UsersService,
    CareersService,
    DepartmentsService,
    SettingsService,
    ReservationsService,
    UsersQuantityService,
    DataReservationService,
    ExternalUserService,
    AdminDataService,
    CompanionsService
  ],
  exports: [ // Visible for other components
    ReservationModule,
    ReservationEditComponent
  ]
})
export class HomeModule { }
