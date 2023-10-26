import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";

@Component({
  selector: "description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css"],
})
export class DescriptionComponent {
  product: Product = new Product();

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    Object.assign(
      this.product,
      repository.getProduct(activeRoute.snapshot.params["id"])
    );
  }

  redirectToStore() {
    this.router.navigate(["/store"]);
  }
}
