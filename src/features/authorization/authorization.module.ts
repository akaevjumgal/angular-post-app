import { NgModule } from '@angular/core';
import { AuthorizationComponent } from 'src/features/authorization/authorization.component'
import { SharedModule } from 'src/shared/shared.module'

@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [AuthorizationComponent]
})
export class AuthorizationModule { }
