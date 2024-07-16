import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/app.component.service';

@Component({
  selector: 'app-user.details',
  templateUrl: './user.details.component.html',
  styleUrls: ['./user.details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service :ApiService) { }
  userId : any

  formData =
  {
    fullName : '',
    email : '',
    phone : '',
    address : '',
    password : ''
  };

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get("id"))
    var dataFromquery = this.route.snapshot.queryParamMap.get("Name")
    console.log(this.route.snapshot.url);
    this.service.getDataById(this.userId).subscribe((res)=> this.formData = res)
  }


 

  submitForm(){
    console.log(this.formData);
    this.service.addData(this.formData).subscribe()
  }


  

}
