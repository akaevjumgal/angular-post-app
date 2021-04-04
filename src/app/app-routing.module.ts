import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {DashboardComponent} from '../features/dashboard/dashboard.component'
import {PostComponent} from '../features/post/post.component'
import {SettingsComponent} from '../features/settings/settings.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'posts/:postId',
    component: PostComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
