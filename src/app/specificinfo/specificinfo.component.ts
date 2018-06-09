import { Component, OnInit } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';

import { ActivatedRoute, Router } from '@angular/router'
import { IcendfireService } from '../icendfire.service';



@Component({
  selector: 'app-specificinfo',
  templateUrl: './specificinfo.component.html',
  styleUrls: ['./specificinfo.component.css']
})
export class SpecificinfoComponent implements OnInit {

  public specificItemData;

  constructor(public iceandfireService: IcendfireService, private _route: ActivatedRoute, private router: Router, private spinner: SpinnerVisibilityService) {

    spinner.show();


  }

  ngOnInit() {
    console.log("Single View NgOnInit called");
    let itemName = this._route.snapshot.paramMap.get('itemName');

    let id = this._route.snapshot.paramMap.get('id');
    console.log(`${id} is called and item name :${itemName}`)
    this.specificItemData = this.iceandfireService.getSpecificItem(itemName, id).subscribe(   //this is getting book data
      data => {
        setTimeout(() => {
          this.specificItemData = data;
          console.log('single Item');
          console.log(this.specificItemData);
          this.spinner.hide()
        }, 3000);  //passsing to get detail function

      },
      error => {
        console.log(error.errorMessage);

      });

  }
  public getobjectId = (a: string): string => {
    let position = a.lastIndexOf('/');

    let id = a.substr(position + 1);
    return id;
  };

}
