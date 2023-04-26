import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DealerService} from "../../service/dealer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent {

  addDealerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private dealerService: DealerService,
              private router: Router) {
  }

  ngOnInit() {
    this.addDealerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.addDealerForm.valid) {
      this.dealerService.addDealer({...this.addDealerForm.value, debt: 0})
        .subscribe(
          res => {
            console.log('Başarılı:', res);
            this.router.navigate(['/']); // ana sayfaya yönlendir
          },
          err => console.error('Hata:', err)
        );
    }
  }
}
