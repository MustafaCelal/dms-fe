import {Component, OnInit} from '@angular/core';
import {DealerService} from "../../service/dealer.service";
import {Dealer} from "../../interface/dealer.interface";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Product} from 'src/app/interface/product.interface';
import {DeliveryItem} from "../../interface/deliveryItem.interface";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Delivery} from "../../interface/delivery.interface";
import {DeliveryService} from "../../service/delivery.service";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  dealer: Dealer;
  products: Product[];
  selectedProduct: Product;
  deliveryItem: DeliveryItem;
  deliveryItems: DeliveryItem[] = [];
  quantity: number;
  mainTotal: number = 0;
  remaining: number = 0;
  deliveryItemForm: FormGroup;
  paidAmount: number = 0;
  delivery: Delivery;

  constructor(private activatedRoute: ActivatedRoute, private dealerService: DealerService,
              private productService: ProductService, private formBuilder: FormBuilder,
              private deliveryService: DeliveryService
  ) {
  }

  ngOnInit(): void {
    this.deliveryItemForm = this.formBuilder.group({
      product: ['', Validators.required],
      quantity: ['', Validators.required]
    });
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.dealerService.getDealer(+params.get('dealerId')!).subscribe(
        (response) => {
          this.dealer = response;
        }
      );
    });

    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      }
    );
  }

  onButtonClick(): void {
    this.deliveryItem = <DeliveryItem>{
      productName: this.selectedProduct.productName,
      productPrice: this.selectedProduct.salePrice,
      quantity: this.quantity,
      subTotal: this.quantity * this.selectedProduct.salePrice
    }

    this.deliveryItems.push(this.deliveryItem);
    this.mainTotal += this.deliveryItem.subTotal
    this.remaining = this.mainTotal - this.paidAmount;

    this.deliveryItemForm.reset();
  }

  removeItem(deliveryItem: DeliveryItem) {
    const index = this.deliveryItems.indexOf(deliveryItem);
    if (index > -1) {
      this.deliveryItems.splice(index, 1);
    }

    this.mainTotal -= deliveryItem.subTotal;
    this.remaining = this.mainTotal - this.paidAmount;
  }

  inputChanged() {
    console.log("inp")
    this.remaining = this.mainTotal - this.paidAmount;
  }

  completeOrder() {
    this.delivery = <Delivery>{
      deliveryTime: new Date().toISOString(),
      dealer: this.dealer,
      newDebt: this.dealer.debt + this.remaining,
      paidAmount: this.paidAmount,
      previousDebt: this.dealer.debt,
      remainingAmount: this.remaining,
      totalAmount: this.mainTotal,
      deliveryItems: this.deliveryItems
    }

    this.dealer.debt += this.remaining;

    this.dealerService.putDealer(this.dealer);
    this.deliveryService.postDelivery(this.delivery);

  }

}
