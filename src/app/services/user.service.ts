import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor() { }
  // userName = new BehaviorSubject('heyNg')
  userName = new Subject<any>();
}
