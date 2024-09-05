import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
    const body = document.querySelector('body');
    if (body) {
      body.setAttribute('themebg-pattern', 'theme1');
    }
  }
  signIn() {
    console.log('Sign in button clicked');
    this.router.navigateByUrl('module/dashboard')
  }
}
