import { MineService } from './../services/mine.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  @Input() githubProfile: any;
  myRepo: any;

  constructor(private mineService: MineService) {
    this.mineService.getMyInfo().subscribe((response) => {
      this.myRepo = response;
      console.log('myResponse', response);

    })
   }

  ngOnInit(): void {
  }

}
