import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AlertDialogComponent} from './alert-dialog.component'
import {MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [
    AlertDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    AlertDialogComponent
  ]
})
export class AlertDialogModule {
}
