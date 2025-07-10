import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) { }

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  onSubmit() {
    if(this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      //this.redirectToDashboard();
    } 
  }

  redirectToDashboard() {
    // Aquí puedes implementar la lógica para redirigir al usuario al dashboard
    console.log('Redirigiendo al dashboard...');
    // Por ejemplo, usando el router de Angular:
    this.router.navigate(['/dashboard']);
  }
}
