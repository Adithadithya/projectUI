import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import {UsersService} from "./users.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment';
  form: FormGroup
  users:any;
  constructor(    public fb: FormBuilder,
    public userService: UsersService
    ){
  }


  ngOnInit(): void {
    this.users=[];
  
this.loadUsers();

 this.form = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      emailID:['',Validators.required],
      contactNo:['',Validators.required],
      image:['']
    });
  }
loadUsers(){
  this.userService.getUsers().subscribe((data: any) => {
    console.log("data",data);

    this.users = data;
    
  })
}
  onSubmit(){
    console.log(this.form.getRawValue());
    
    if(this.form.valid)
    {
      console.log("Add data added");
      this.userService.insertUser(this.form.getRawValue()).subscribe((data: any) => {
        console.log("data",data);
        this.loadUsers();
      })
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }



}
