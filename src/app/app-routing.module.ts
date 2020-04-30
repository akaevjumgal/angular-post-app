import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {DashboardComponent} from '../modules/dashboard/dashboard.component'
import {PostComponent} from '../modules/post/post.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: DashboardComponent
  },
  {
    path: 'posts/:postId',
    component: PostComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
