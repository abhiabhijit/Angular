import { Component, OnInit } from '@angular/core';
import { IcendfireService } from '../icendfire.service';
import { OrderPipe } from 'ngx-order-pipe';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { OrderDataPipe } from '../custom.pipe'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  static finalData(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  public data;
  public allData = [];
  public books;
  public characters;
  public houses;
  public finalData;
  public order: string = 'name';
  //Error while running ng build --prod like missing prperty in homeComponent
  public filterValue;
  public caseInsensitive;


  constructor(public iceandfireService: IcendfireService, private orderPipe: OrderPipe, private spinner: SpinnerVisibilityService) {

    spinner.show();
    



  }



  ngOnInit() {




    this.houses = this.iceandfireService.getHouses().subscribe(

      result => {
        setTimeout(() => {

          let houses = result;

          this.allData.push(houses);
          this.finalData = [].concat(...this.allData);
          console.log("houses are logged here")

          console.log(this.finalData)



        }, 3000);

      },
      error => {
        console.log("Error occured")
        console.log(error.errorMessage)
      }


    )

    this.characters = this.iceandfireService.getCharacters().subscribe(

      result => {
        setTimeout(() => {
          console.log("#######################")

          let characters = result;

          for (let character of characters) {
            if (character.name == "") {
              character.name = character.aliases//To sort under one name field
            }
          }


          this.allData.push(characters);
          this.finalData = [].concat(...this.allData);
          console.log("characters  are logged here")

          console.log(this.finalData)






        }, 3000);

      },
      error => {
        console.log("Error occured")
        console.log(error.errorMessage)
      }


    )
    this.books = this.iceandfireService.getBooks().subscribe(

      result => {
        setTimeout(() => {

          let books = result;

          this.allData.push(books);
          this.finalData = [].concat(...this.allData);
          console.log("Sorted Data")



          console.log(this.orderPipe.transform(this.finalData, this.order));
          this.spinner.hide();


        }, 3000);

      },
      error => {
        console.log("Error occured")
        console.log(error.errorMessage)
      }


    )
  }
  public getobjectId = (a: string): string => {
    let position = a.lastIndexOf('/');

    let id = a.substr(position + 1);
    return id;
  };

  //end
}
