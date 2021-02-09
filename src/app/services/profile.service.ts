import { environment } from './../../environments/environment.prod';
import { Users } from './../classes/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  profile = new Users();

  private username: string;

  constructor(private http: HttpClient) {
    console.log('Service is now ready!');
    // this.username = 'BrianMbugua5693';
   }

  //  github profile
   getProfile(search): Observable<any[]>{
    let dataURL = `https://api.github.com/users/${search}?access_token=${environment.token}`;
    return this.http.get<any>(dataURL);
   }


  //  gihub repo

  getRepos(search):Observable<any[]>{
    let dataURL = `https://api.github.com/users/${search}/repos?access_token=${environment.token}`;
    return this.http.get<any>(dataURL);
  }
}
