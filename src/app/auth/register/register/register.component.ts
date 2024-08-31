import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  ngOnInit() {
    const body = document.querySelector('body');
    if (body) {
      body.setAttribute('themebg-pattern', 'theme1');
    }
  }

}
