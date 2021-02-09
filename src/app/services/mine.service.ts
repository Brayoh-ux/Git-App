import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MineService {
   private username: string;

  constructor(private http: HttpClient) {
    console.log("We are on!");
    this.username = 'BrianMbugua5693';
  }
  getMyInfo(){
    return this.http.get('https://api.github.com/users/' + this.username + "?access_token="+ environment.token);
  }
}
