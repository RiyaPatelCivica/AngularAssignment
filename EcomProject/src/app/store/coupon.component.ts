import { Discount } from './../model/coupon.model';
import { Router } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  selector: "coupon",
  templateUrl:"coupon.component.html",
  styleUrls: ["coupon.component.css"],
})
export class CouponComponent {
  constructor(private router: Router ,public discount : Discount) {}

  redirectToStore() {
    this.router.navigate(["/store"]);
  }

  applyCoupon() {
    this.discount.CheckDiscount();
    alert("Coupon is activeted !!");
  }


}
