import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customre } from '../customre';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  customers:Customre= new Customre();

  formGroup!: FormGroup;
  
  constructor(private service:RegisterService,private router:Router){}
  ngOnInit() {
   this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      contactNumber: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      salary: new FormControl('',[Validators.required]), 
      panNumber: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      employerType: new FormControl('',[Validators.required])

  })
  }
  back(){
    this.router.navigate(['/login']);
  }
  loginProcess(){
    if(this.formGroup?.valid){
    this.service.createCustomer(this.customers).subscribe( (data: any) =>{

      console.log(data);
      alert("Customer Saved Successfully!")

      this.router.navigate(['/login']);
      

    },

      (    error: any) => {
        alert("Something Went Wrong!")
        console.log(error)});
  }else{
    alert("Check the values and validations!")
  }
  
}
}
