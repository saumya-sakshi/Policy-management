import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Policy } from '../policy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  policy:Policy= new Policy();
  formGroup!: FormGroup;

  constructor(private policyservice:PolicyService,
    private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      id: new FormControl('',[Validators.required]),
      policyName: new FormControl('',[Validators.required]),
      startDate: new FormControl('',[Validators.required]),
      years: new FormControl('',[Validators.required]),
      companyName: new FormControl('',[Validators.required]),
      initialAmount: new FormControl('',[Validators.required]),
      policyType: new FormControl('',[Validators.required]), 
      userType: new FormControl('',[Validators.required]),
      termsPerYear: new FormControl('',[Validators.required]),
      termAmount: new FormControl('',[Validators.required]),
      interest: new FormControl('',[Validators.required])

  })
  }
  savePolicy(){

    if(this.formGroup.valid){
      this.policyservice.createPolicy(this.policy).subscribe( (data: any) =>{
  
        console.log(data);
        alert("Policy Create successfully");
  
        this.router.navigate(['/admin']);
        
  
      },
  
        (    error: any) => {
          alert("Something Went Wrong!"+error);
          console.log(error)});}


  }
  back(){
    this.router.navigate(['/admin']);
  }
}
