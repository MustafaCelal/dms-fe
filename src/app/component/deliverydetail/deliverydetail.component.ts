import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Delivery} from 'src/app/interface/delivery.interface';
import {DeliveryService} from "../../service/delivery.service";

@Component({
  selector: 'app-deliverydetail',
  templateUrl: './deliverydetail.component.html',
  styleUrls: ['./deliverydetail.component.css']
})
export class DeliverydetailComponent implements OnInit {

  delivery: Delivery;

  constructor(private activatedRoute: ActivatedRoute,
              private deliveryService: DeliveryService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.deliveryService.getDelivery(+params.get('deliveryId')!).subscribe(
        (response) => {
          this.delivery = response;
          console.log(response)
        }
      );
    });
  }

}
