import {Component} from '@angular/core';
import {Product} from "../interface/product.interface";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.productList = response;
      }
    );
  }

  deleteProduct(product: Product) {
    console.log("product deleted",product)
  }

  editProduct(product: Product) {
    console.log("product editted",product)
  }
}
