import { Discount } from './model/coupon.model';
import { StoreFirstGuard } from './storeFirst.guard';
import { CouponComponent } from './store/coupon.component';
import { DescriptionComponent } from './store/description.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
        canActivate : [StoreFirstGuard]
      },
      {
        path: "cart",
        component: CartDetailComponent,
        canActivate : [StoreFirstGuard]
      },
      {
        path: "description",
        component: DescriptionComponent,
        canActivate : [StoreFirstGuard]
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate : [StoreFirstGuard]
      },
      {
        path: "coupon",
        component: CouponComponent,
        canActivate : [StoreFirstGuard]
      },
      {
        path: "description/:id",
        component: DescriptionComponent,
        canActivate : [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/coupon" },
    ]),
  ],
  providers: [Discount, StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
