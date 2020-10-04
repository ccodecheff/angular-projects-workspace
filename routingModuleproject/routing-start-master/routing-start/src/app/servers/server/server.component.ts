import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  

  constructor(private serversService: ServersService, 
    private routes: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    const id= +this.routes.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    
    this.routes.params.subscribe(
      (params:Params) => {
        this.server= this.serversService.getServer(+params['id']);
        //console.log(this.server);
        
      }); // end of subscribe
  } // end of nhInIt
  onEdit(){
      //this.router.navigate(['/servers', this.server.id,'edit']);
      //queryParamsHandling:'preserve': It will preserve the old routed  query Params 
      // 'relativeTo:this.routes' helps router to navigate the current route, 
            //we don't need to specify server/edit 
      this.router.navigate(['edit'],{relativeTo:this.routes, queryParamsHandling:'preserve'});

  }

}
