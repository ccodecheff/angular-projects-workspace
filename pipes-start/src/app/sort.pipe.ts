import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:any,status:boolean,propName:string): any {
    if(status==true){
       return value.sort((a,b)=>{
         
        if(a[propName]> b[propName])
         return 1;
         else
          return -1;
       }); 
       
    }
return value;
  }

}
