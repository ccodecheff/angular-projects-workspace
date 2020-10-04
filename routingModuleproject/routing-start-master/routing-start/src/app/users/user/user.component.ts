import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  paramSubscription : Subscription;

  constructor(private acRoute : ActivatedRoute) { }

  ngOnInit() {
    this.user ={
      id: this.acRoute.snapshot.params['id'],
      name:this.acRoute.snapshot.params['name']
    }

    this.paramSubscription=this.acRoute.params.
      subscribe(
      (param:Params)=>{
        this.user.id = param.id;
        this.user.name = param.name;
      }
    );
  }

  ngOnDestroy()
  {
    this.paramSubscription.unsubscribe();
  }
}
