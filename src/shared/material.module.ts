import {NgModule} from '@angular/core'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar'

@NgModule({
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [MatIconRegistry]
})
export class MaterialModule {}
