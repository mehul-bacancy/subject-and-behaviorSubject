import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  userName: string = 'Mehul';
  constructor(private user: UserService) { 
    this.user.userName.subscribe(uname=> {
      this.userName =uname;
    })
  }

  ngOnInit() {
    const subject = new Subject()
  }
  updte(uname){
    this.user.userName.next(uname.value);
  }
}
