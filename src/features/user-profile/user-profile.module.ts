import { NgModule } from '@angular/core'
import { UserProfileComponent } from 'src/features/user-profile/user-profile.component'
import { SharedModule } from 'src/shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    UserProfileComponent,
  ],
})
export class UserProfileModule { }
