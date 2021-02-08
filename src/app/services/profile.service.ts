import { environment } from './../../environments/environment';
import { Users } from './../classes/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

profile: new Users();

username: string;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
    console.log('Service is now ready!');
    this.username = 'BrianMbugua5693';
   }

   getUserInfo(){
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + environment.token) ;
   }
}
