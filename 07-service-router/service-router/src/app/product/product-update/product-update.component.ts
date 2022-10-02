import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  categories: Category[] = [];
  product: Product = {};
  productForm: FormGroup = new FormGroup({});
  id: number;

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private router: Router, private activeRoute: ActivatedRoute) {
    activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      // @ts-ignore
      this.productService.getProductById(this.id).subscribe(productTemp => {
        this.product = productTemp;
      });
      console.log(this.product);
      this.productForm = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description),
        category: new FormControl(),
      });
    });

  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  submit() {
    let category: Category;
    let product: Product = this.productForm.value;
    this.categoryService.findById(this.productForm.value.category).subscribe(categoryTemp => {
      category = categoryTemp;
      product.category = category;
    });
    this.productService.updateProduct(product.id, product).subscribe(product => {
      this.router.navigateByUrl('');
      alert('cập nhật thành công');
    });
  }
}
