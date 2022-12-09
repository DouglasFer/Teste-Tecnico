import { Users } from './../shared/users';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  arrayUser!: Users;
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.arrayUser = new Users();
    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required]],
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    let dataUsersFromLocal = this.arrayUser;
    if (localStorage['@Register']) {
      dataUsersFromLocal = JSON.parse(localStorage.getItem('@Register') || '');
    } else {
      localStorage.setItem('@Register', JSON.stringify(this.arrayUser));
    }

    console.log(dataUsersFromLocal);

    const nameFromLocal = dataUsersFromLocal.name;
    const userFromLocal = dataUsersFromLocal.user;
    const emailFromLocal = dataUsersFromLocal.email;
    const passwordFromLocal = dataUsersFromLocal.password;

    if (nameFromLocal || userFromLocal || emailFromLocal || passwordFromLocal) {
      this.arrayUser = new Users();
      this.toastr.success('Cadastro Efetuado com sucesso!');

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 4000);
    } else {
      this.toastr.error('Somente o campo imagem pode ser vazio!');
    }
  }
}
