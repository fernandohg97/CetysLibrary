import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
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
