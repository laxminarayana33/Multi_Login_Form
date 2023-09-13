import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  LoginForm = false;
  viewForm= true;
  LoginForm1 = false;
  LoginForm2 = false;

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
}

