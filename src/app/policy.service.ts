import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from './policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private baseurl="http://localhost:9090/api/v1.0/policy/register"
  

  constructor(private httpClient:HttpClient) { }
  public createPolicy(policy:Policy):Observable<Object>{
    return this.httpClient.post(`${this.baseurl}`, policy);
  }
}
