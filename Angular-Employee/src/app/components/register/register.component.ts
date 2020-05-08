import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  invalidRegister: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: AuthenticationService) {}


  ngOnInit(): void { }

  checkRegister() {
    (this.loginService.register(this.registerForm.get("username").value,
    this.registerForm.get("password").value).subscribe(
      data => {
        this.router.navigate(['login'])
        this.invalidRegister = false
      },
      error => {
        //popup choose other username
        this.invalidRegister = true

      }
    )
    );
  }

}
