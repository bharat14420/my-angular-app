import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, DoCheck, OnChanges{

  value:any=''
  
  constructor(private fomBuilder:FormBuilder) {
    this.fomBuilder.group(this.formGroup);
   }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngDoCheck(): void {
    this.value=this.formGroup.value as string
  }

  
  
  formGroup = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    name : new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword : new FormControl('',[Validators.required]),
    address: new FormGroup({
      houseNo: new FormControl(),
      street: new FormControl(),
      area: new FormControl(),
      city: new FormControl(),
      state: new FormControl()
    }),
    
  })
  ngOnInit(): void {
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.formGroup.controls?.['name'].setValue("shh")
    
  }

  onConfirmPassword()
  {
    if(this.formGroup.get('password')?.value != this.formGroup.get('confirmPassword')?.value
                                 && this.formGroup.get('password')?.touched
                                 && this.formGroup.get('confirmPassword')?.touched)
                                 return true

                                 return false
  }
  



}
