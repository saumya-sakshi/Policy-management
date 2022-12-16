import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseurl="http://localhost:9091/api/v1.0/customer/login"
  

  constructor(private http:HttpClient) { }

  public login(customer:User):Observable<Object>{
    return this.http.post(`${this.baseurl}`, customer);
  }
}
