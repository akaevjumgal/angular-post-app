import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login'
import { UserProfileService } from 'src/features/user-profile/user-profile.service'
import { UserProfileQuery } from 'src/features/user-profile/user-profile.query'
import { Router } from '@angular/router'
import { AuthorizationService } from 'src/features/authorization/authorization.service'

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(
    public userProfileQuery: UserProfileQuery,
    private socialAuthService: SocialAuthService,
    private userProfileService: UserProfileService,
    private router: Router,
    private authService: AuthorizationService
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/']).catch(console.error)
    }
  }

  async login() {
    const user = await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.userProfileService.saveProfile(user)
    await this.router.navigate(['/'])
  }

}
