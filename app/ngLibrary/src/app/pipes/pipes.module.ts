import { NgModule } from '@angular/core';
import { SearchReservationPipe } from './searchReservation/search-reservation.pipe';
import { SearchEmployeePipe } from './searchEmployee/search-employee.pipe';

@NgModule({
  // All components
  declarations: [
    SearchReservationPipe,
    SearchEmployeePipe
  ],
  // All modules
  imports: [
  ],
  exports: [
    SearchReservationPipe,
    SearchEmployeePipe
  ],
  providers: [] // Services are here
})
export class PipesModule {
  static forRoot() {
      return {
          ngModule: PipesModule,
          providers: [],
      };
   }
}
