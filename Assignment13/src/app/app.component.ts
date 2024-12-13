import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public fbobj = new FormBuilder();


  MarvellousForm = this.fbobj.group(
    {
      firstname : ['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
      lastname : [''],
      email : ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\\.[a-zA-Z]{2,}$')]],
      phone : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^[0-9]+$')]],
      addressline1 : [''],
      state : [''],
      city : ['',[Validators.required,Validators.minLength(4),Validators.pattern('^[A-Za-z]+$')]],
      zip : ['',[Validators.minLength(5),Validators.maxLength(5),Validators.pattern('^[0-9]+$')]],
      comment : ['',[Validators.minLength(30)]]
    }
  );
}
