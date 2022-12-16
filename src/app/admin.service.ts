import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from './policy';
export class PolicyRegistration {
  constructor(
    public id: string,
    public policyName: string,
    public startDate: string,
    public years: number,
    public companyName: string,
    public initialAmount: number,
    public policyType: string,
    public userType: string,
    public termsPerYear: number,
    public termAmount: number,
    public interest: number,
  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private baseurl = "http://localhost:9090/api/v1.0/policy/getall"

  constructor(private httpclient: HttpClient) { }
  retriveSearches() {
    return this.httpclient.get<PolicyRegistration[]>(`http://localhost:9090/api/v1.0/policy/getall`)
  }
  update(currentPolicy: PolicyRegistration): Observable<Object> {
    return this.httpclient.put(`http://localhost:9090/api/v1.0/policy/update`, currentPolicy);
  }
  public deletePolicy(id: string) {
    return this.httpclient.delete(`http://localhost:9090/api/v1.0/policy/delete?id=`+id);
  }
  public updatePolicy(policy: { id: string; policyName: string; startDate: string; years: string; companyName: string; initialAmount: string; policyType: string; userType: string; termsPerYear: string; termAmount: string; interest: string; }){
    return this.httpclient.put(`http://localhost:9090/api/v1.0/policy/update?id=`,policy);
  }

}
