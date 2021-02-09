import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: ProfileService) { }

  public githubUser: string;
  public gihubProfile: any[];
  public githubRepos: any;

  // github profile get
  searchUser(){
    this.service.getProfile(this.githubUser).subscribe((response)=>{
      this.gihubProfile = response;
    });

    this.service.getRepos(this.githubUser).subscribe((response) => {
      this.githubRepos = response;
    })
  }


  ngOnInit(): void {
  }

}
