import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('checkIn-user-data')) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
