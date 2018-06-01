import { NgModule } from '@angular/core';
import { SearchReservationPipe } from './searchReservation/search-reservation.pipe';
import { SearchEmployeePipe } from './searchEmployee/search-employee.pipe';
import { SearchExternalUserPipe } from './searchExternalUser/search-external-user.pipe';
import { SearchCubiclePipe } from './searchCubicle/search-cubicle.pipe';
import { SearchCareerPipe } from './searchCareer/search-career.pipe';
import { SearchUserPipe } from './searchUser/search-user.pipe';
import { SearchDepartmentPipe } from './searchDepartment/search-department.pipe';
import { SearchReservationCubiclePipe } from './searchReservationCubicle/search-reservation-cubicle.pipe';
import { SearchReservationDatePipe } from './searchReservationDate/search-reservation-date.pipe';
import { SearchReservationCareerPipe } from './searchReservationCareer/search-reservation-career.pipe';
import { DateFormatPipe } from './dateFormat/date-format.pipe';

@NgModule({
  // All components
  declarations: [
    SearchReservationPipe,
    SearchEmployeePipe,
    SearchExternalUserPipe,
    SearchUserPipe,
    SearchCareerPipe,
    SearchCubiclePipe,
    SearchDepartmentPipe,
    SearchReservationCubiclePipe,
    SearchReservationDatePipe,
    SearchReservationCareerPipe,
    DateFormatPipe
  ],
  exports: [ // Visible in other components
    SearchReservationPipe,
    SearchEmployeePipe,
    SearchExternalUserPipe,
    SearchUserPipe,
    SearchCareerPipe,
    SearchCubiclePipe,
    SearchDepartmentPipe,
    SearchReservationDatePipe,
    SearchReservationCubiclePipe,
    SearchReservationCareerPipe,
    DateFormatPipe
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
