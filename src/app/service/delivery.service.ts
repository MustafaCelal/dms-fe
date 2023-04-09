import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Delivery} from '../interface/delivery.interface';


@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private readonly apiUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale: string) {
  }

  getAllDeliveries(): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/delivery`)
      .pipe(map((response) => this.mapDeliveryListResponse(response)));
  }

  getDeliveriesByDealerId(dealerId: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/delivery/dealer/${dealerId}`)
      .pipe(map((response) => this.mapDeliveryListResponse(response)));
  }

  getDelivery(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/delivery/${id}`)
      .pipe(map((response) => this.mapDeliveryResponse(response)));
  }

  private mapDeliveryListResponse(deliveryList: Delivery[]): any {
    return deliveryList.map((delivery: any) => (this.mapDeliveryResponse(delivery)))

  }

  private mapDeliveryResponse(delivery: Delivery): any {
    return <Delivery>{
      id: delivery.id,
      deliveryTime: this.formatDate(delivery.deliveryTime),
      newDebt: delivery.newDebt,
      paidAmount: delivery.paidAmount,
      previousDebt: delivery.previousDebt,
      remainingAmount: delivery.remainingAmount,
      totalAmount: delivery.totalAmount,
      dealer: delivery.dealer,
      deliveryItems: delivery.deliveryItems
    }


  }

  formatDate(dateInput: string): string {
    const dateArray = dateInput.toString().split(",");

    const date = new Date(
      +dateArray[0],
      +dateArray[1] - 1,
      +dateArray[2],
      +dateArray[3],
      +dateArray[4]
    );
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${dateArray[2]}.${dateArray[1]}.${dateArray[0]} ${formattedHours}:${formattedMinutes}`;
  }

}
