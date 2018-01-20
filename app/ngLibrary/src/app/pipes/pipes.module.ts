import { NgModule } from '@angular/core';
import { SearchReservationPipe } from './searchReservation/search-reservation.pipe';
import { SearchEmployeePipe } from './searchEmployee/search-employee.pipe';
import { SearchExternalUserPipe } from './searchExternalUser/search-external-user.pipe';
import { SearchCubiclePipe } from './searchCubicle/search-cubicle.pipe';
import { SearchCareerPipe } from './searchCareer/search-career.pipe';
import { SearchUserPipe } from './searchUser/search-user.pipe';
import { SearchDepartmentPipe } from './searchDepartment/search-department.pipe';

@NgModule({
  // All components
  declarations: [
    SearchReservationPipe,
    SearchEmployeePipe,
    SearchExternalUserPipe,
    SearchUserPipe,
    SearchCareerPipe,
    SearchCubiclePipe,
    SearchDepartmentPipe
  ],
  exports: [
    SearchReservationPipe,
    SearchEmployeePipe,
    SearchExternalUserPipe,
    SearchUserPipe,
    SearchCareerPipe,
    SearchCubiclePipe,
    SearchDepartmentPipe
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
