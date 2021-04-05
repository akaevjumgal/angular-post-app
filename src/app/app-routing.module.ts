import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {DashboardComponent} from '../features/dashboard/dashboard.component'
import {PostComponent} from '../features/post/post.component'
import {SettingsComponent} from '../features/settings/settings.component'
import { AuthorizationComponent } from 'src/features/authorization/authorization.component'
import { LayoutComponent } from 'src/features/layout/layout.component'
import { UserProfileComponent } from 'src/features/user-profile/user-profile.component'
import { AuthorizationGuard } from 'src/features/authorization/authorization.guard'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      {
        path: 'posts/:postId',
        component: PostComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      }
    ],
    canActivate: [AuthorizationGuard]
  },
  {
    path: 'auth',
    component: AuthorizationComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
