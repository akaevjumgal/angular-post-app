import {NgModule} from '@angular/core'
import {SharedModule} from '../shared/shared.module'
import {DashboardModule} from './dashboard/dashboard.module'
import {PostModule} from './post/post.module'
import {PostDialogModule} from './post-dialog/post-dialog.module'
import {AlertDialogModule} from './alert-dialog/alert-dialog.module'

@NgModule({
  imports: [
    SharedModule,
    DashboardModule,
    PostModule,
    PostDialogModule,
    AlertDialogModule,
  ],
  providers: []
})
export class FeaturesModule {}
