import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService, PolicyRegistration } from '../admin.service';
import { Policy } from '../policy';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  policy = null as any;
  
  
  polices!: PolicyRegistration[]
  searchText!: string
  formGroup!: FormGroup;
  showMe:boolean=false;
  policyToUpdate={
    id:"",
  policyName:"",
    startDate:"",
  years:"",
    companyName:"",
   initialAmount:"",
    policyType:"",
  userType:"",
  termsPerYear:"",
   termAmount: "",
   interest:""
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: AdminService) { }

  ngOnInit(): void {
    this.retrieveSearch()

  }
  retrieveSearch() {
    this.service.retriveSearches().subscribe(
      response => {
        this.polices = response
      }
    )
  }
  
  update(policyDetails: { id: any; policyName: any; startDate: any; years: any; companyName: any; initialAmount: any; policyType: any; userType: any; termsPerYear: any; termAmount: any; interest: any; }){
   this.showMe=!this.showMe;
   this.policyToUpdate= policyDetails;
   this.formGroup=new FormGroup({
    id: new FormControl(this.policyToUpdate.id,[Validators.required]),
    policyName: new FormControl(this.policyToUpdate.policyName,[Validators.required]),
    startDate: new FormControl(this.policyToUpdate.startDate,[Validators.required]),
    years: new FormControl(this.policyToUpdate.years,[Validators.required]),
    companyName: new FormControl(this.policyToUpdate.companyName,[Validators.required]),
    initialAmount: new FormControl(this.policyToUpdate.initialAmount,[Validators.required]),
    policyType: new FormControl(this.policyToUpdate.policyType,[Validators.required]), 
    userType: new FormControl(this.policyToUpdate.userType,[Validators.required]),
    termsPerYear: new FormControl(this.policyToUpdate.termsPerYear,[Validators.required]),
    termAmount: new FormControl(this.policyToUpdate.termAmount,[Validators.required]),
    interest: new FormControl(this.policyToUpdate.interest,[Validators.required])
   })

  }

  delete(student: { id: string; }) {
    this.service.deletePolicy(student.id).subscribe( (data: any) =>{

      console.log(data);
      alert("Deleted Successfully!")
        this.retrieveSearch();
    },

      (    error: any) => {
        alert("Something Went Wrong!")
        console.log(error)});
  }
  
    
    

  

  add() {
    this.router.navigate(['/policy']);
  }
  back() {
    this.router.navigate(['/login']);
  }

 
updatePolicy(){
  this.service.updatePolicy(this.policyToUpdate).subscribe(
    (Response)=>{
      {
        alert("Policy Updated Successfully!")
        console.log(Response);
        this.showMe=!this.showMe;
      }
    },(err)=>{
      alert("Something went wrong!")
      console.log(err);
      this.showMe=!this.showMe;
    }
  )

}
}
