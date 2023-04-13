import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../interface/product.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent {
  productForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProducteditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Product,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      salePrice: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
