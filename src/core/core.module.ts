import {NgModule} from '@angular/core'
import {StoreModule} from './store.module'

@NgModule({
  imports: [
    StoreModule,
  ],
  exports: [
    StoreModule,
  ],
  providers: []
})
export class CoreModule {}
