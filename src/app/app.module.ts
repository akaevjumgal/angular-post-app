import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {SharedModule} from '../shared/shared.module'
import {CoreModule} from '../core/core.module'
import {FeaturesModule} from '../features/features.module'
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FeaturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
