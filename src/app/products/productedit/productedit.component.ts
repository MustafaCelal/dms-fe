import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from 'src/app/service/product.service';
import {Product} from "../../interface/product.interface";

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent {
  constructor(public dialogRef: MatDialogRef<ProducteditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Product,
              private productService: ProductService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditClick() {
    this.productService.updateProduct(this.data).subscribe()
  }
}
