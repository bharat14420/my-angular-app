import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/app.component.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  formData =
  {
    fullName : '',
    email : '',
    phone : '',
    address : '',
    passwordHash : ''
  };

  constructor(private service : ApiService) { }

  ngOnInit(): void {
  }
  submitForm(){
    console.log(this.formData);
    this.service.addData(this.formData).subscribe()
  }


  

}
