import { Injectable } from '@angular/core';
import { UserProfileQuery } from 'src/features/user-profile/user-profile.query'

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private userProfileQuery: UserProfileQuery) { }

  get isAuthenticated() {
    return this.userProfileQuery.exist
  }
}
