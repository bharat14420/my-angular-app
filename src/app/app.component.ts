import { Component, DoCheck, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ApiService } from 'src/services/app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck , OnChanges {
  title = 'my-angular-app';
  myArr : any[] = [];
  newArr : any[] = [];
  disable : boolean =false;
  formData =
  {
    fullName : '',
    email : '',
    phone : '',
    address : ''
  };
    displayedColumns: string[] = ['id','name', 'email']; 
    count = 0;
  constructor(private service : ApiService) {
    service.getData().subscribe(res => 
      {
        this.myArr = res
        this.newArr = res;
      });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonChanges" , changes)
  }


  @ViewChild('viewchildValue') value!: ElementRef ;


  seeViewChildValue()
  {

    console.log(this.value.nativeElement.value);
    if(this.value.nativeElement.value == 132)
      {
          this.disable = true
      } 
  }

  getDatafromchild(event : any)
  {
    
    this.service.updateData(event).subscribe(res => res);
    this.service.getData().subscribe  (res => 
    {
      this.service.getData().subscribe(res => this.newArr = res);
    })
  }

  filterDataOnSearchValue(event: any){
    console.log(event);
    
    this.newArr = this.myArr.filter(item => item.fullName.includes(event))
  }

  findlength(){
    return this.myArr.length
  }

  ngDoCheck(){
    console.log("ngdochanges" )
  }

}
