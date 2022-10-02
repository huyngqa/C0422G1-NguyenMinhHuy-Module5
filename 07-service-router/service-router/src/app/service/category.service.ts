import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const CATEGORY_URL = `${environment.API_URL}`;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(CATEGORY_URL + 'categories');
  }

  saveCategory(category) {
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get(CATEGORY_URL + 'categories/' + id);
  }

  updateCategory(id: number, category: Category) {
  }

  deleteCategory(id: number) {
  }
}
