import { Injectable } from '@angular/core';
import { UserProfileStore } from 'src/features/user-profile/user-profile.store'
import { SocialUser } from 'angularx-social-login'

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private store: UserProfileStore) { }

  saveProfile(profile: SocialUser) {
    this.store.setLoading(true)
    this.store.update(profile)
    this.store.setLoading(false)
  }
}
