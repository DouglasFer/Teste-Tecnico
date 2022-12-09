import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Registered } from './../shared/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  arrayUserRegistered!: Registered;

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.arrayUserRegistered = new Registered();
  }

  onSubmit() {
    const registeredUser = JSON.parse(localStorage.getItem('@Register') || '');

    const userOrEmail = this.arrayUserRegistered.user;
    const passwordUser = this.arrayUserRegistered.password;

    const loginUser = registeredUser.user;
    const loginEmail = registeredUser.email;
    const passwordLogin = registeredUser.password;

    if (
      userOrEmail === loginUser ||
      (userOrEmail === loginEmail && passwordUser === passwordLogin)
    ) {
      this.toastr.success('Login Efetuado!');
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 4000);
    } else {
      this.toastr.error('Verifique Usuário e Senha', 'Algo deu errado!');
    }
  }
}
