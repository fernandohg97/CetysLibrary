import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupEmployeeInfoComponent } from './popup-employee-info/popup-employee-info.component';
import { PopupExternalInfoComponent } from './popup-external-info/popup-external-info.component';
import { PopupBorrowedMaterialComponent } from './popup-borrowed-material/popup-borrowed-material.component';
import { PopupUserDetailsComponent } from './popup-userDetails/popup-userDetails.component';
import { PopupUserInfoComponent } from './popup-user-info/popup-user-info.component';
import { NguiPopupModule } from '@ngui/popup';
import { PopupConfirmComponent } from './popup-confirm/popup-confirm.component';
import { PopupConfirmElementComponent } from './popup-confirm-element/popup-confirm-element.component';
import { HomeDialogsComponent } from './home-dialogs.component';

@NgModule({
  imports: [ // All modules
    CommonModule,
    NguiPopupModule
  ],
  declarations: [ // All components
    PopupUserInfoComponent,
    PopupUserDetailsComponent,
    PopupExternalInfoComponent,
    PopupEmployeeInfoComponent,
    PopupBorrowedMaterialComponent,
    PopupConfirmComponent,
    PopupConfirmElementComponent,
    HomeDialogsComponent
  ],
  exports: [ // All modules visible for other components
    NguiPopupModule
  ],
  entryComponents: [ // Components that are not referencing in the template explicity
    PopupUserDetailsComponent,
    PopupUserInfoComponent,
    PopupEmployeeInfoComponent,
    PopupExternalInfoComponent,
    PopupBorrowedMaterialComponent,
    PopupConfirmComponent,
    PopupConfirmElementComponent
  ]
})
export class HomeDialogsModule { }
