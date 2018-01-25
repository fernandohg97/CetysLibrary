import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
<<<<<<< HEAD
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
=======
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
>>>>>>> 6f88e15179c21d33d57156d21c165567ead3cd70
import { FormsModule } from '@angular/forms';
import { NguiPopupModule } from '@ngui/popup';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    NguiPopupModule,
    PipesModule.forRoot()
  ],
  declarations: [
    ReportsComponent
  ],
  exports: [
    ReportsComponent
  ]
})
export class ReportsModule { }
