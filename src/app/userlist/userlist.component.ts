import { Component, Input, OnInit ,EventEmitter , Output, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/app.component.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
  })
  export class UserlistComponent implements OnInit {
    
    title = 'my-angular-app';
    myArr : any = [];

    displayedColumns: string[] = ['id','name', 'email', 'phone', 'address']; 
    count = 0;
    @Input() listcount  = 87
    @Input() formData =
    {
      fullName : '',
      email : '',
      phone : '',
      address : ''
    };

    constructor(private service :  ApiService, private router : Router) { }
    
    ngOnInit(): void {
      this.getRowData();
    }

    getRowData()
    {
      this.service.getData().subscribe(res => this.myArr = res);
    }

    deleteRow(Id : any)
    {
    this.service.deleteData(Id).subscribe(() => {
      this.getRowData();
    })
  }

  selectedRowValue : any
  searchValue : any 

  @Output()
  functionemitter : EventEmitter<any> = new EventEmitter<any>();


  @Output()
  searchValueEmitter : EventEmitter<any> = new EventEmitter<any>();

  functioOnchange(element:any){
    this.service.updateData(element).subscribe(
      res => this.getRowData()
    )
  }

  onSearch(){

    this.searchValueEmitter.emit(this.searchValue)
    console.log(this.searchValue);
    console.log(this.myArr);
  }

  navigateToFirst(id: number) {
    this.router.navigate(['GetUser',id],{queryParams : {Name : "Hello"}})
  }



}
