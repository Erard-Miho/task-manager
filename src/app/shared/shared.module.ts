import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FindItemPipe } from './find-item.pipe';
import { HighLightDirective } from './high-light.directive';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { ToastrComponent } from './toastr/toastr.component';


@NgModule({
  declarations: [ConfirmationComponent, FindItemPipe, HighLightDirective, ListComponent, ModalComponent, SpinnerOverlayComponent, ToastrComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
