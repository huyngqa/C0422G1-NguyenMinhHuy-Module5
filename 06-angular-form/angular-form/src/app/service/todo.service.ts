import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Todo} from '../todo';

const API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(API_URL + 'todos');
  }

  addTodo(todo: Todo) {
    return this.httpClient.post(API_URL + 'todos', todo);
  }

  getTodoById(id: number): Observable<any> {
    return this.httpClient.get(API_URL + 'todos/' + id);
  }

  toggleTodo(id: number, todo: Todo) {
    return this.httpClient.patch(API_URL + 'todos/' + id, todo);
  }
  deleteTodo(id: number) {
    return this.httpClient.delete(API_URL + 'todos/' + id);
  }
}
