import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Product} from '../../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private router: Router) {
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
      this.productService.saveProduct(product).subscribe(product => {
        this.router.navigateByUrl('');
        alert('Thêm mới thành công');
      });
    });

  }
}
