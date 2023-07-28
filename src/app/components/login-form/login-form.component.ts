import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'LoginForm',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  isLoginForm = true;

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.setLoginForm();
  }

  setLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  setRegisterForm() {
    this.loginForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.minLength(8)]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      repeatPassword: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  toggleRegister() {
    this.isLoginForm = !this.isLoginForm;
    this.isLoginForm ? this.setLoginForm() : this.setRegisterForm();
  }


  mainAction() {
    console.log(`form valido: ${ this.loginForm.valid }`);
    
    this.isLoginForm ? this.login() : this.register();
  }

  login() {
    console.log(this.loginForm.value)
    this.router.navigate(['home']);

  }

  register() {
    console.log('clicou cadastrar')
    console.log(this.loginForm.value)
  }
}
