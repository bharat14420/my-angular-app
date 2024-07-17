import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, DoCheck, OnChanges{

  value:any=''
  
  constructor(private fomBuilder:UntypedFormBuilder) {
    this.fomBuilder.group(this.formGroup);
   }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngDoCheck(): void {
    this.value=this.formGroup.value as string
  }

  
  
  formGroup = new UntypedFormGroup({
    email: new UntypedFormControl('',[Validators.email,Validators.required]),
    name : new UntypedFormControl('',[Validators.required]),
    password: new UntypedFormControl('',[Validators.required]),
    confirmPassword : new UntypedFormControl('',[Validators.required]),
    address: new UntypedFormGroup({
      houseNo: new UntypedFormControl(),
      street: new UntypedFormControl(),
      area: new UntypedFormControl(),
      city: new UntypedFormControl(),
      state: new UntypedFormControl()
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
