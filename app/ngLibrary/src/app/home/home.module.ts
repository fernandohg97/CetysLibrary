import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing/home.routing.module'
import { ReservationModule } from './reservation/reservation.module';
import { ReportsModule } from './reports/reports.module';
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
import { NguiPopupModule } from '@ngui/popup';
import { PopupUserDetailsComponent } from './popup-userDetails/popup-userDetails.component';
import { DataReservationService } from '../services/dataReservation/data-reservation.service';
import { PipesModule } from '../pipes/pipes.module';
import { PopupUserInfoComponent } from './popup-user-info/popup-user-info.component';
import { PopupEmployeeInfoComponent } from './popup-employee-info/popup-employee-info.component';
import { ExternalUserService } from '../services/externalUser/external-user.service';
import { PopupExternalInfoComponent } from './popup-external-info/popup-external-info.component';
import { PopupBorrowedMaterialComponent } from './popup-borrowed-material/popup-borrowed-material.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReservationModule,
    ReportsModule,
    HomeRoutingModule,
    NguiPopupModule,
    PipesModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    ReservationCreateComponent,
    ReservationUpdateComponent,
    ReservationEditComponent,
    PopupUserDetailsComponent,
    PopupUserInfoComponent,
    PopupEmployeeInfoComponent,
    ReservationCreateExternalComponent,
    PopupExternalInfoComponent,
    PopupBorrowedMaterialComponent
  ],
  providers: [
    CubiclesService,
    UsersService,
    CareersService,
    DepartmentsService,
    SettingsService,
    ReservationsService,
    UsersQuantityService,
    DataReservationService,
    ExternalUserService
  ],
  exports: [
    ReservationModule,
    ReportsModule,
    ReservationEditComponent,
    PopupUserDetailsComponent
  ],
  entryComponents: [PopupUserDetailsComponent, PopupUserInfoComponent, PopupEmployeeInfoComponent, PopupExternalInfoComponent, PopupBorrowedMaterialComponent]
})
export class HomeModule { }
