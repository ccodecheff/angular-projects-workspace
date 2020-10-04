import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilerPipe implements PipeTransform {

  transform(value: any, filterstring:string,propName: string):any{
    if(value.length===0){
      return value;
    }
    const resultArray =[];
    for(const item of value){
    if(item[propName]===filterstring){
    
        resultArray.push(item);
      }
    }
  return resultArray;
  }

}
