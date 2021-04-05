import {NgModule} from '@angular/core'
import {SharedModule} from '../shared/shared.module'
import {DashboardModule} from './dashboard/dashboard.module'
import {PostModule} from './post/post.module'
import {PostDialogModule} from './post-dialog/post-dialog.module'
import {AlertDialogModule} from './alert-dialog/alert-dialog.module';
import { AuthorizationModule } from 'src/features/authorization/authorization.module';
import { LayoutModule } from 'src/features/layout/layout.module';
import { UserProfileModule } from 'src/features/user-profile/user-profile.module'

@NgModule({
  imports: [
    SharedModule,
    DashboardModule,
    PostModule,
    PostDialogModule,
    AlertDialogModule,
    AuthorizationModule,
    LayoutModule,
    UserProfileModule,
  ],
})
export class FeaturesModule {}
