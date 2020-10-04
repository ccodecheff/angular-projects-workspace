import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/userservice';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
  
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  activecount: number;
 // @Output() userSetToActive = new EventEmitter<number>();
 constructor(private userservice: UserService){
  this.activecount =this.userservice.activecount;
  console.log("active count:"+this.activecount); 
 }
 
 ngOnInit(){
  this.users = this.userservice.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userservice.onSetToActive(id);
    this.activecount =this.userservice.activecount;
    console.log("active count:"+this.activecount); 
  }
}
