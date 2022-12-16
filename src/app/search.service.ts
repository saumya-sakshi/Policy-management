import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class PolicyRegistration{constructor(
  public id:string,
  public policyName:string,
  public startDate:string,
  public years:number,
  public companyName:string,
  public initialAmount:number,
  public policyType:string,
  public userType:string,
  public termsPerYear:number,
  public termAmount:number,
  public interest:number,
){}}
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseurl="http://localhost:9090/api/v1.0/policy/getall"

  constructor(private httpclient:HttpClient) { }
  retriveSearches() {
    return this.httpclient.get<PolicyRegistration[]>(`http://localhost:9090/api/v1.0/policy/getall`)
  }
}