import {Dealer} from "./dealer.interface";
import {DeliveryItem} from "./deliveryItem.interface";

export interface Delivery {

  id?: number;
  deliveryTime:string;
  newDebt: number;
  paidAmount: number;
  previousDebt: number;
  remainingAmount: number;
  totalAmount: number;
  dealer: Dealer;
  deliveryItems: DeliveryItem[];
}
