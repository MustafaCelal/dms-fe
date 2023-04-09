import { Component } from '@angular/core';
import { DealerService } from 'src/app/service/dealer.service';
import {Dealer} from "../../interface/dealer.interface";

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent {
  dealerList : Dealer[];
  hasDealer : boolean = false;

  constructor(private dealerSevice:DealerService){}

  ngOnInit():void{
    this.dealerSevice.getDealers().subscribe(
      (results:any)=>{

        this.dealerList=results;
        this.hasDealer=results.length>0;
        console.log(this.dealerList)
      }
    );
  }
}



