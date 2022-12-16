import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PolicyRegistration, AdminService } from '../admin.service';
import { Policy } from '../policy';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  policy = null as any;
  search:Policy= new Policy();
  polices!: PolicyRegistration[]
  searchText!:string
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: SearchService) { }

  ngOnInit(): void {this.retrieveSearch()
    
  }
  retrieveSearch(){
    this.service.retriveSearches().subscribe(
      response=>{
        this.polices=response
      }
    )
  }
  back(){
    this.router.navigate(['/home']);
  }
}
