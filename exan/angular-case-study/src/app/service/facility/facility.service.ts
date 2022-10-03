import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const FACILITY_URL = `${environment.API_URL}` + 'facilities/';
@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(FACILITY_URL);
  }

  findFacilityById(id: number): Observable<any> {
    return this.httpClient.get(FACILITY_URL + id);
  }
}
