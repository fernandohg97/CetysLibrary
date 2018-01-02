import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

// import { ReservationCreateComponent } from './home/reservation/reservation-create/reservation-create.component'
// import { ReservationUpdateComponent } from './home/reservation/reservation-update/reservation-update.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
  // { path: 'reports', component: ReportsComponent },
  // { path: 'reservations-create', component: ReservationCreateComponent },
  // { path: 'reservations-update', component: ReservationUpdateComponent }

  // { path: '**', component: PageNotFoundComponent } Route in case page is not found
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
