import { NgModule } from '@angular/core';
import { SearchReservationPipe } from './searchReservation/search-reservation.pipe';

@NgModule({
  // All components
  declarations: [
    SearchReservationPipe
  ],
  // All modules
  imports: [
  ],
  exports: [SearchReservationPipe],
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
