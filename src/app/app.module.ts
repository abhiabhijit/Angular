import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {RouterModule,Routes} from '@angular/router'
import {OrderDataPipe} from './custom.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IcendfireService } from './icendfire.service';
import { SpecificinfoComponent } from './specificinfo/specificinfo.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http'; 
//OrderBy Module to sort in alphabetical order
import { OrderModule } from 'ngx-order-pipe';
//Loader While getting the data with subscribe method
import { NgHttpLoaderModule } from 'ng-http-loader';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecificinfoComponent,
    OrderDataPipe
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    OrderModule,
    NgHttpLoaderModule,
    
   
    BsDropdownModule.forRoot(),

    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([{path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'home/:itemName/:id',component:SpecificinfoComponent},



    ])
  ],
  providers: [IcendfireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
