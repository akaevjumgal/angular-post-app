import { NgModule } from '@angular/core';
import {PostDialogComponent} from './post-dialog.component';
import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    PostDialogComponent
  ],
  exports: [
    PostDialogComponent
  ]
})
export class PostDialogModule { }
