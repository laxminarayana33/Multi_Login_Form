import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(
    private router:Router
  ){}

  data = {
   city: "",
   district:"",
   dob:"",
   email: "",
   firstName:"something",
   gender:"",
   hno: "",
   lastName: "",
   phone: "",
   phone1: "",
   pincode: "",
   state:"",
   street:""
  };
  ngOnInit(){
    this.data = JSON.parse(localStorage.getItem('Data') || '{}');
    console.log(this.data)
  }
  edit(){
    this.router.navigate([''])
  }
  submit(){
    alert('Your application was submitted successfully');
    this.router.navigate(['www.google.com']);
  }
}
