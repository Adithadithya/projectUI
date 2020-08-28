import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment';
  form: FormGroup
  constructor(    public fb: FormBuilder
    ){
  }


  ngOnInit(): void {
 this.form = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      emailID:['',Validators.required],
      contactNo:['',Validators.required],
      image:['',Validators.required]
    });
  }

  onSubmit(){
    console.log(this.form.getRawValue());
    
    if(this.form.valid)
    {
      console.log("Add data added");
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }



}
