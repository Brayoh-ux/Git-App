import { Users } from './../classes/users';
import { ProfileService } from './../services/profile.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

@Input() githubProfile: any;

  constructor(private profileService: ProfileService) {

   }

  ngOnInit(): void {
  }

}
