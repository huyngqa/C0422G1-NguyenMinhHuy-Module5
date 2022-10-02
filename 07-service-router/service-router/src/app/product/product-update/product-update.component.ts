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
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private router: Router, private activeRoute: ActivatedRoute) {
    activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productService.getProductById(this.id).subscribe(productTemp => {
        this.productForm = new FormGroup({
          name: new FormControl(productTemp.name),
          price: new FormControl(productTemp.price),
          description: new FormControl(productTemp.description),
          category: new FormControl(),
        });
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

  submit(id: any) {
    let category: Category;
    let product: Product = this.productForm.value;
    this.categoryService.findById(this.productForm.value.category).subscribe(categoryTemp => {
      category = categoryTemp;
      product.category = category;
      product.id = id;
    });
    this.productService.updateProduct(id, product).subscribe(product => {
      this.router.navigateByUrl('');
      alert('cập nhật thành công');
    });
  }
}
