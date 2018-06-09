import { Injectable } from '@angular/core';

import {HttpClientModule,HttpResponse,HttpClient, HttpErrorResponse} from '@angular/common/http';


import { Observable } from 'rxjs'
// import 'rxjs/add/operator/catch'
// import 'rxjs/add/operator/do'


@Injectable({
  providedIn: 'root'
})
export class IcendfireService {

  public data
  public base_url='https://anapioficeandfire.com/api/'

  constructor(public _http:HttpClient) { 
    console.log("Service is called");
  }

  private handleError (err : HttpErrorResponse){
    console.log("Handle error HTTP calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }
  public getBooks = (): any => {
    let response = this._http.get(`${this.base_url}/books/`);
    return response;
  }
  //method to get all houses
  public getHouses = (): any => {
    let response = this._http.get(`${this.base_url}/houses/`);
    return response;
  }


  //method to get all characters
  public getCharacters = (): any => {
    let response = this._http.get(`${this.base_url}/characters/`);
    return response;
  }
 
  //method to get specific item data
  public getSpecificItem = (itemName, id): any => {
    let specificData = this._http.get(`${this.base_url }/${itemName}/${id}`);
    return specificData;
  }
}
