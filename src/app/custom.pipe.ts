import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class OrderDataPipe implements PipeTransform {
  public filteredArray;
 
  transform(array: Array<Object>, filterpara: string): Array<object> {
    console.log("In filterDataPipe")
    if (!array || !filterpara ||filterpara == undefined) {
      return array;
    }
    
    else if(filterpara == "All"){
      return array;
    }
    else{
      this.filteredArray = array.filter(val => {
        let url = val['url'].toLowerCase();
        let filterbydata = filterpara.toLowerCase();
        return url.search(filterbydata) > -1;
      });  
    }

    
    return this.filteredArray;

  }
}