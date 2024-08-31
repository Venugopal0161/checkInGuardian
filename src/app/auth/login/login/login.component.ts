import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor() {

  }

  ngOnInit() {
    const body = document.querySelector('body');
    if (body) {
      body.setAttribute('themebg-pattern', 'theme1');
    }
  }

}
