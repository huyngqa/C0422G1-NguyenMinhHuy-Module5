import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const CUSTOMER_URL = `${environment.API_URL}` + 'customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(): Observable<any> {
    return this.httpClient.get(CUSTOMER_URL);
  }
}
