import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutComponent } from 'src/features/layout/layout.component'
import { SharedModule } from 'src/shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent
  ],
})
export class LayoutModule {}
