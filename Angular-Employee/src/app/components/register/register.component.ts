import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string
  password: string
  invalidRegister: boolean = false;

  constructor(private router: Router,
    private loginService: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkRegister() {
    (this.loginService.register(this.username, this.password).subscribe(
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
