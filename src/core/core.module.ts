import {NgModule} from '@angular/core'
import {StoreModule} from './store.module'
import { AuthModule } from 'src/core/auth.module'

@NgModule({
  imports: [
    StoreModule,
    AuthModule
  ],
  exports: [
    StoreModule,
    AuthModule
  ],
})
export class CoreModule {}
