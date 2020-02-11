import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  userName: string = 'Kalp';
  constructor(private user: UserService) { 
    this.user.userName.subscribe(uname=> {
      this.userName =uname;
    })
  }

  ngOnInit() {
  }
  updte(uname){
    this.user.userName.next(uname.value);
  }
}
