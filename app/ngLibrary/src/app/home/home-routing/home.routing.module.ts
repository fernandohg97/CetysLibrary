import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from '../reports/reports.component';
import { ReservationCreateComponent } from '../reservation/reservation-create/reservation-create.component';
import { ReservationUpdateComponent } from '../reservation/reservation-update/reservation-update.component';
import { ReservationEditComponent } from '../reservation/reservation-edit/reservation-edit.component';
import { AdminComponent } from '../../admin/admin.component';
import { MainHomeComponent } from '../main-home/main-home.component';
import { HomeComponent } from '../home.component';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent,
  children: [
    { path: '', component: MainHomeComponent },
    { path: 'reservations', component: ReportsComponent },
    { path: 'reservations-create/:id', component: ReservationCreateComponent },
    { path: 'reservations-update/:id', component: ReservationUpdateComponent },
    { path: 'reservations-edit/:id', component: ReservationEditComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Route in case page is not found
  ]},

]

@NgModule({
  imports: [
    RouterModule.forRoot(homeRoutes)
  ],
  exports: [RouterModule]
})

export class HomeRoutingModule {}
