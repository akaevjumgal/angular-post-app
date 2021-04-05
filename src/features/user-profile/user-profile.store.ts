import { Store, StoreConfig } from '@datorama/akita'
import { Injectable } from '@angular/core'
import { SocialUser } from 'angularx-social-login'

export interface UserProfileState extends SocialUser {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'userProfile' })
export class UserProfileStore extends Store<UserProfileState> {
  constructor() {
    super(new SocialUser())
  }
}
