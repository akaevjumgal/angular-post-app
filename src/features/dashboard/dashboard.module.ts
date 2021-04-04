import {NgModule} from '@angular/core'
import {DashboardComponent} from './dashboard.component'
import {SharedModule} from '../../shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
