import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from '../reports/reports.component';
import { ReservationCreateComponent } from '../reservation/reservation-create/reservation-create.component';
import { ReservationUpdateComponent } from '../reservation/reservation-update/reservation-update.component';
import { ReservationEditComponent } from '../reservation/reservation-edit/reservation-edit.component';
import { AdminComponent } from '../../admin/admin.component';
import { MainHomeComponent } from '../main-home/main-home.component';
import { HomeComponent } from '../home.component';

const homeRoutes: Routes = [ // Home routes
  { path: 'home', component: HomeComponent, // '/home' path
  children: [
    { path: '', component: MainHomeComponent }, // '/home' path
    { path: 'reservations', component: ReportsComponent }, // '/home/reservations'
    { path: 'reservations-create/:id', component: ReservationCreateComponent }, // 'home/reservations-create/id' path
    { path: 'reservations-update/:id', component: ReservationUpdateComponent }, // 'home/reservations-update/id' path
    { path: 'reservations-edit/:id', component: ReservationEditComponent }, // 'home/reservations-edit/id' path
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
