import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../model/car';

const CAR_URL = 'http://localhost:8080/rest/cars/';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  getAllCar(): Observable<any> {
    return this.httpClient.get(CAR_URL);
  }

  deleteCarById(id: number) {
    return this.httpClient.delete(CAR_URL + id);
  }

  getCarById(id: number): Observable<any> {
    return this.httpClient.get(CAR_URL + id);
  }

  updateCar(id: number, car: Car) {
    return this.httpClient.put(CAR_URL + '?id=' + id, car);
  }
}
