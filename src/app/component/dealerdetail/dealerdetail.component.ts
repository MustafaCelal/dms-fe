import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DealerService} from "../../service/dealer.service";
import {Dealer} from "../../interface/dealer.interface";
import {Delivery} from "../../interface/delivery.interface";
import {DeliveryService} from "../../service/delivery.service";

@Component({
  selector: 'app-dealerDetail',
  templateUrl: './dealerdetail.component.html',
  styleUrls: ['./dealerdetail.component.css']
})
export class DealerdetailComponent implements OnInit {

  dealer: Dealer;
  deliveries: Delivery[];
  deliveryCount: number;

  constructor(private activatedRoute: ActivatedRoute,
              private dealerService: DealerService,
              private deliveryService: DeliveryService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.dealerService.getDealer(+params.get('id')!).subscribe(
        (response) => {
          this.dealer = response;
        }
      );

      this.deliveryService.getDeliveriesByDealerId(+params.get('id')!).subscribe(
        (response) => {
          this.deliveries = response;
          this.deliveryCount=response.length;
        }
      );
    });
  }

}
