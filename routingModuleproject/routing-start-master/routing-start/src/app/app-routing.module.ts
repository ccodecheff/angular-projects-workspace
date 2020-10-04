import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes : Routes =[
    {path :'', component : HomeComponent},
    {path :'users', component : UsersComponent, children:[
      {path :':id/:name', component : UserComponent}]},
  
      {path :'servers', //canActivate:[AuthGuard],
      // canActivateChild will only apply to child components of the current route
        canActivateChild:[AuthGuard],component : ServersComponent, children:[
      {path :':id/edit', component : EditServerComponent, canDeactivate:[CanDeactivateGuard]},
      {path :':id', component : ServerComponent}
    ]},
    //{path :'not-found', component : PageNotFoundComponent},
    {path :'not-found', component : ErrorPageComponent, data:{message:'Page not found! visit again soon'} },
    {path :'**', redirectTo : '/not-found'},
  
  ];
  
 // RouterModule.forRoot(appRoutes)
// useHash:true will add # after http://localhost:4200/#
        // RouterModule.forRoot(appRoutes, {useHash:true})  
    @NgModule({
        imports:
          [ RouterModule.forRoot(appRoutes)],
          
        exports:[RouterModule]

    })
export class AppRoutingModule{



}