import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }

  onLogin() {
    const formData = this.loginForm.value;
    this.submitted = true;
    if(this.submitted) {
      this.authService.login(formData).subscribe((res: any) => {
        console.log(res);
        this.tokenStorageService.saveDataUser(res.token, res.roleName, res.email);
      })
    }

    this.router.navigate(['/'])
  }

}
