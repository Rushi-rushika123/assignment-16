import { Component, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-common-comp-form',
  templateUrl: './common-comp-form.component.html',
  styleUrls: ['./common-comp-form.component.css']
})
export class CommonCompFormComponent {
  inputdata='';
  errormessage:string='';
  NumRegex= '^[0-9]*$';
  StringRegex= '^[a-z][a-zA-Z]+$';
  BoolRegex= '^(True|False|TRUE|FALSE|true|false|0|1)$';
  BinaryRegex ='^[0-1]+$';
  HexRegex='^#[0-9A-Fa-f]+$';
  CommonCompForm = new FormGroup({
    DropDown: new FormControl('',Validators.required),
    AddValue: new FormControl('',Validators.required)
  });
  @Output() sendInput = new EventEmitter<string>();
  get AddValue()
  {
    return this.CommonCompForm.controls['AddValue']
  }
  get DropDown()
  {
    return this.CommonCompForm.controls['DropDown']
  }
  inputfield(evrn:any){
    // console.log(evrn.target.value);
    this.inputdata=evrn.target.value
    console.log(this.inputdata);
    this.sendInput.emit(this.inputdata);
  }
  
  selected(e:any){
    this.CommonCompForm.controls['AddValue'].setValue('');
    if(e.target.value=='Number')
    {
      this.CommonCompForm.controls['AddValue'].addValidators(Validators.pattern(this.NumRegex));
      this.errormessage='*Invalid Number';
      // console.log('1225545')
    }
    else if(e.target.value=='String')
    {
      this.CommonCompForm.controls['AddValue'].addValidators(Validators.pattern(this.StringRegex));
      this.errormessage='*Invalid String';
      // console.log('abc')

    }
    else if(e.target.value=='Boolean')
    {
      this.CommonCompForm.controls['AddValue'].addValidators(Validators.pattern(this.BoolRegex));
      this.errormessage='*Invalid Boolean';
      // console.log('01')

    }
    else if(e.target.value=='Binary')
    {
      this.CommonCompForm.controls['AddValue'].addValidators(Validators.pattern(this.BinaryRegex));
      this.errormessage='*Invalid Binary';
      // console.log('01')
    }

    else if(e.target.value=='Hexacode')
    {
      this.CommonCompForm.controls['AddValue'].addValidators(Validators.pattern(this.HexRegex));
      this.errormessage='*Invalid Hexacode';
      // console.log('01')
    }

    

    


  }
}
