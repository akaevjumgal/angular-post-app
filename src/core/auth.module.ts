import { NgModule } from '@angular/core'
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login'
import { environment } from 'src/environments/environment'

const SOCIAL_AUTH_SERVICE_CONFIG = 'SocialAuthServiceConfig'

@NgModule({
  imports: [
    SocialLoginModule
  ],
  providers: [
    {
      provide: SOCIAL_AUTH_SERVICE_CONFIG,
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.authClientId)
          }
        ]
      } as SocialAuthServiceConfig
    }
  ]
})
export class AuthModule {}
