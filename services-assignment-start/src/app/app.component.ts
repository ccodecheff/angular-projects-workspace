import { Component, OnInit, SimpleChange } from '@angular/core';
import { UserService } from './services/userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];
  activecount:number;
  inactivecount:number;

  constructor(private userservice: UserService){
   
  }
  
  ngOnIt(){
   this.activeUsers.push(this.userservice.activeUsers);
    this.inactiveUsers.push(this.userservice.inactiveUsers);
     
   // this.activeUsers=this.userservice.activeUsers;
    
  //  this.inactiveUsers=this.userservice.inactiveUsers;
  }

}
