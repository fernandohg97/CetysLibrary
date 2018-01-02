import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsUserDetailsComponent } from './reports-user-details/reports-user-details.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [
    ReportsComponent,
    ReportsUserDetailsComponent
  ],
  exports: [
    ReportsComponent,
    ReportsUserDetailsComponent
  ]
})
export class ReportsModule { }
