import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private router:Router
  ){}
  LoginForm = false;
  viewForm= true;
  LoginForm1 = false;
  LoginForm2 = false;

  Login = this.fb.group({
    firstName:['' ,Validators.required],
    lastName:['' ,Validators.required],
    gender:['' ,Validators.required],
    dob:['' ,Validators.required],
    email:['', Validators.required],
    phone:['', Validators.required],
    phone1:['', Validators.required],
    hno:['', Validators.required],
    street:['', Validators.required],
    city:['', Validators.required],
    district:['', Validators.required],
    state:['', Validators.required],
    pincode:['', Validators.required],
  })
  goToLogin(){
    this.viewForm = false;
    this.LoginForm = true;
  }

  firstStep(){
    this.LoginForm = false;
    this.LoginForm1 = true;
  }
  previous(){
    this.LoginForm1 =false;
    this.LoginForm = true;
  }
  moveTo(){
    this.LoginForm1 =false;
    this.LoginForm2 = true;
  }
  moveBack(){
    this.LoginForm2 =false;
    this.LoginForm1 = true;
  }
  submit(){
    let TotalData = this.Login.value
    localStorage.setItem('Data', JSON.stringify(TotalData));
    this.router.navigate(['edit']);
    alert('navigate')
  }

}
