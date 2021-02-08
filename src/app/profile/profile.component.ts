import { Users } from './../classes/users';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = new Users();

  constructor(private profileService: ProfileService) {
    this.profileService.getUserInfo().subscribe((response: any) => {
      this.profile = response;
      console.log('New Response', response);

    })
   }

  ngOnInit(): void {
  }

}
