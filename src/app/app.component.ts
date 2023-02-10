import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignmentForm';
  addValue:string='';
  registrationForm = new FormGroup({
    firstName: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[A-Z]+[a-zA-Z]*$"),Validators.minLength(3),Validators.maxLength(256)])),
    lastName: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[A-Z]+[a-zA-Z]*$"),Validators.minLength(3),Validators.maxLength(256)])),
    Age: new FormControl('',Validators.compose([Validators.required,Validators.max(999),Validators.min(1)])),
    Email: new FormControl('', Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{3,4}$")])),
    PhoneNo: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$")])),
    UserName: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")])),
    AdditinalDataLabel: new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,256}[a-zA-Z0-9]$")])),
    
  });
  getInput(event:string){
    this.addValue = event;
  }
 get firstname(){
  return this.registrationForm.get('firstName')
  }
  get lastname(){
    return this.registrationForm.get('lastName')
    }
  get Age(){
    return this.registrationForm.get('Age')
  }
  get email() {
    return this.registrationForm.get('Email');
  }
  get PhoneNo(){
    return this.registrationForm.get('PhoneNo');
  }
  get UserName(){
    return this.registrationForm.get('UserName')
  }
  get AdditinalDataLabel(){
    return this.registrationForm.get('AdditinalDataLabel')
  }

  submittedData:any;
  constructor(private router: Router){}
  onSubmit(){
    console.log(this.registrationForm);
    this.submittedData = this.registrationForm.value; 
    this.router.navigate(['display'],{
      state: { submittedData : this.submittedData, AdditionalValue : this.addValue }
    })

}
}
