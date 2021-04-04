import {NgModule} from '@angular/core'
import {environment} from '../environments/environment'
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools'
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store'
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service'
import {persistState} from '@datorama/akita'

const persist = persistState()

@NgModule({
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
  ],
  exports: [],
  providers: [
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }},
    { provide: 'persistStorage', useValue: persist }
  ],
})
export class StoreModule {}
