import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customre } from './customre';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseurl="http://localhost:9090/api/v1.0/customer/register"

  constructor(private httpClient:HttpClient) { }
  public createCustomer(customer:Customre):Observable<Object>{
    return this.httpClient.post(`${this.baseurl}`, customer);
  }
}
