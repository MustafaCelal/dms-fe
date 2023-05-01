import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DealerService} from "../../service/dealer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Dealer} from "../../interface/dealer.interface";

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent {

  dealer: Dealer;
  addDealerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private dealerService: DealerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

      if (+params.get('dealerId')!) {
        this.dealerService.getDealer(+params.get('dealerId')!).subscribe(
          (response) => {
            this.dealer = response
            this.addDealerForm = this.formBuilder.group({
              name: [this.dealer.name, Validators.required],
              phoneNumber: [this.dealer.phoneNumber, Validators.required],
              address: [this.dealer.address, Validators.required]
            })
          }
        );
      }
    });
    this.addDealerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

  onSubmit() {
    debugger
    if (this.addDealerForm.valid) {
      this.dealerService.addDealer({...this.addDealerForm.value, debt: 0}).subscribe(
          res => {
            console.log('Başarılı:', res);
            this.router.navigate(['/']); // ana sayfaya yönlendir
          },
          err => console.error('Hata:', err)
        );
    }
  }

  saveDealer() {
    if (this.addDealerForm.valid) {
      this.dealer.name = this.addDealerForm.value.name
      this.dealer.phoneNumber = this.addDealerForm.value.phoneNumber
      this.dealer.address = this.addDealerForm.value.address
      console.log(this.dealer)

      this.dealerService.putDealer(this.dealer).subscribe(
        () => this.router.navigate(['/'])
      );
    }
  }

  deleteDealer() {
    this.dealerService.deleteDealer(this.dealer).subscribe(
      () => this.router.navigate(['/'])
    );
  }
}
