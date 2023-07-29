import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/globals/services/account.service';

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

  error: string | null = null;
  message: string | null = null;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private account: AccountService
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
    this.error = null;
  }


  mainAction() {
    this.isLoginForm ? this.login() : this.register();
  }

  async login() {
    const { email, password } = this.loginForm.value;

    (await this.account.login({ email, password })).toPromise().then((res) => {

      const { token, user } = res as { user: any, token: string };

      if (token) {
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        this.router.navigate(["/home"]);
      } else {
        this.error = "Usuário ou senha incorretos";
        throw new Error("Unauthorized");
      }
    });
  }

  async register() {
    const { name, email, password, repeatPassword } = this.loginForm.value;

    if (this.loginForm.valid) {
      if (password !== repeatPassword) {
        this.error = "As senhas não são iguais";
        return;
      }

      await (await this.account.register({ name, email, password })).toPromise().then((res) => {
        this.message = JSON.stringify(res);
      })
        
          
    } else {
      this.error = "Todos os campos devem ser preenchidos corretamente";
    }
  }
}
