import { Myservice } from './../myservice';
import { Component } from '@angular/core';


@Component({
  selector: 'app-new-cmp',
  imports: [],
  templateUrl: './new-cmp.html',
  styleUrl: './new-cmp.css',
})
export class NewCmp {
  todaydate;
  newComponent = "Entered New Component";

  constructor(private myservice:Myservice){
    this.todaydate = this.myservice.showTodayDate()
  }

}
