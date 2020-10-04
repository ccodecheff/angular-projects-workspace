import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PipesAssignmentComponent } from './pipes-assignment/pipes-assignment.component';
import { RouterModule } from '@angular/router';
import { ShortenPipes } from './shorten.pipes';
import { FilerPipe } from './filer.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';

const appRoutes=[
  
  {path:'assignment', component:PipesAssignmentComponent}];

@NgModule({
  declarations: [
    AppComponent,
    PipesAssignmentComponent,
    ShortenPipes,
    FilerPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
