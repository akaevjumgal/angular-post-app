import { Component, OnInit } from '@angular/core';
import { UserProfileQuery } from 'src/features/user-profile/user-profile.query'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public userProfileQuery: UserProfileQuery) { }

  ngOnInit(): void {
    console.log(this.userProfileQuery.profile)
  }

}
