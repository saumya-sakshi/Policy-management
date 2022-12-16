import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  
  constructor(private service:LoginService,private router:Router){}
  ngOnInit() {
   this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      email: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
  })
  }
  loginProcess(){
    if(this.formGroup?.valid){
      this.service.login(this.formGroup.value).subscribe(data=>{
        console.log(data);

        if(data==1)
        { alert("Customer Login Successfully!")
          this.router.navigate(['/search']);}
        else if(data==2){
          alert("Admin Login Successfully!")
          this.router.navigate(['/admin']);}
        else if(data==0){
          alert("Invalid UserName and password")
          this.router.navigate(['']);}
      },
  
        (    error: any) => {alert("Invalid UserName and password")
          console.log(error)});
  
    
    }else{
      alert("Enter Your username and password!");
    }
  }
  add(){
    this.router.navigate(['/register']);
  }

}
