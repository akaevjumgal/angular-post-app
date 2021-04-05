import { Query } from '@datorama/akita'
import { UserProfileState, UserProfileStore } from 'src/features/user-profile/user-profile.store'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserProfileQuery extends Query<UserProfileState> {

  isLoading$ = this.selectLoading()

  constructor(protected store: UserProfileStore) {
    super(store)
  }

  get profile() {
    return this.getValue()
  }

  get exist() {
    return !!this.profile.id
  }
}
