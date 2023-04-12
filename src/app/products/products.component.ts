import {Component} from '@angular/core';
import {Product} from "../interface/product.interface";
import {ProductService} from "../service/product.service";
import {MatDialog} from "@angular/material/dialog";
import {ProducteditComponent} from "./productedit/productedit.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList: Product[] = [];

  constructor(private productService: ProductService, public dialog: MatDialog) {
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
    this.productService.deleteProduct(product).subscribe(
      () => this.loadProducts()
    )
  }

  editProduct(product: Product) {
    const dialogRef = this.dialog
      .open(ProducteditComponent, {data: product});

    dialogRef.afterClosed().subscribe(result => {
      if (!result) this.loadProducts()
    });
  }
}
