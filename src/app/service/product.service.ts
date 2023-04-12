import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Product} from '../interface/product.interface';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/product`)
      .pipe(map((response) => this.mapProductListResponse(response)));
  }

  getProduct(id: number = 1): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/product/${id}`)
      .pipe(map((response) => this.mapProductResponse(response)));
  }

  private mapProductListResponse(productList: Product[]): any {
    return productList.map((product: any) => (this.mapProductResponse(product)))
  }

  private mapProductResponse(product: Product): any {
    return <Product>{
      id: product.id,
      productName: product.productName,
      salePrice: product.salePrice
    }
  }
}
