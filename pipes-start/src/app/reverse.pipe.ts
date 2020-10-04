import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
 

  transform(value: any, status:boolean): any { 
    if(status==true){
      return value.split('').reverse().join('');
    }
 return value; 
  
   }

 }