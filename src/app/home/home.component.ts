import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  showMe:boolean=false;
 
  constructor(private userAuthService:UserAuthService,private router:Router){}
  ngOnInit(): void {
    localStorage.clear();
    
    
  }
}
