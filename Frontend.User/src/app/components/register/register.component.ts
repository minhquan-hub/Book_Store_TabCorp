import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
      'phone': new FormControl(),
      'role': new FormControl('User')
    })
  }

  onRegister() {
    const formData = this.registerForm.value
    this.submitted = true;
    if(this.submitted) {
      this.authService.register(formData).subscribe((res: any) => {
        alert('Create User Successful');
        this.router.navigate(['/login']);
        console.log(res);
      })
    }
  }

}
