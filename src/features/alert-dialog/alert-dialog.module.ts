import {NgModule} from '@angular/core'
import {AlertDialogComponent} from './alert-dialog.component'
import {SharedModule} from '../../shared/shared.module'

@NgModule({
  declarations: [
    AlertDialogComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    AlertDialogComponent
  ]
})
export class AlertDialogModule {
}
