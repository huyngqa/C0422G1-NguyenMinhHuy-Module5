import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {};
  productForm: FormGroup = new FormGroup({});
  constructor(private productService: ProductService, private activeRoute: ActivatedRoute) {
    activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // tslint:disable-next-line:radix
      this.product = this.productService.getProductById(parseInt(id));
    });
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    if (this.productForm.valid) {
      this.productService.updateProduct(product);
    }
  }
}
