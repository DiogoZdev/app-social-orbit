import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';

@Component({
  selector: 'Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [LoginFormComponent],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
