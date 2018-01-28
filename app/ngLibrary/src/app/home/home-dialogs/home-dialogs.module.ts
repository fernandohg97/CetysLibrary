import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupEmployeeInfoComponent } from './popup-employee-info/popup-employee-info.component';
import { PopupExternalInfoComponent } from './popup-external-info/popup-external-info.component';
import { PopupBorrowedMaterialComponent } from './popup-borrowed-material/popup-borrowed-material.component';
import { PopupUserDetailsComponent } from './popup-userDetails/popup-userDetails.component';
import { PopupUserInfoComponent } from './popup-user-info/popup-user-info.component';
import { NguiPopupModule } from '@ngui/popup';
import { PopupConfirmComponent } from './popup-confirm/popup-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    NguiPopupModule
  ],
  declarations: [
    PopupUserInfoComponent,
    PopupUserDetailsComponent,
    PopupExternalInfoComponent,
    PopupEmployeeInfoComponent,
    PopupBorrowedMaterialComponent,
    PopupConfirmComponent
  ],
  exports: [
    NguiPopupModule
  ],
  entryComponents: [PopupUserDetailsComponent, PopupUserInfoComponent, PopupEmployeeInfoComponent, PopupExternalInfoComponent, PopupBorrowedMaterialComponent, PopupConfirmComponent]
})
export class HomeDialogsModule { }
