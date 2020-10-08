import { Component,  Input, OnInit } from '@angular/core';
import { UserService } from '../services/userservice';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
 
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  inactivecount:number;
  constructor(private userservice: UserService){
    this.inactivecount =this.userservice.inactivecount;
    console.log("Inactive count:"+this.inactivecount); 
  }

  ngOnInit(){
    this.users = this.userservice.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userservice.onSetToInactive(id);
    this.inactivecount =this.userservice.inactivecount;
    console.log("Inactive count:"+this.inactivecount); 
    
  }
}
