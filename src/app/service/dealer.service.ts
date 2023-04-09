import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Dealer} from '../interface/dealer.interface';


@Injectable({
  providedIn: 'root',
})
export class DealerService {
  private readonly apiUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getDealers(): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/dealer`)
      .pipe(map((response) => this.mapDealerListResponse(response)));
  }

  getDealer(id: number = 1): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/dealer/${id}`)
      .pipe(map((response) => this.mapDealerResponse(response)));
  }

  private mapDealerListResponse(dealerList: Dealer[]): any {
    return dealerList.map((dealer: any) => (this.mapDealerResponse(dealer)))
  }

  private mapDealerResponse(dealer: Dealer): any {
    return <Dealer>{
        id: +dealer.id,
        name: dealer.name,
        address: dealer.address,
        phoneNumber: dealer.phoneNumber,
        debt: +dealer.debt,
      }

  }

}
