import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false
  userRole : string = ''
  constructor(private router: Router) { }

  login(token: string): boolean {
    this.decodeToken(token);
    return this.isLoggedIn;
  }
  checkLogin()
  {
    if(localStorage.getItem('userdetails'))
    {
      this.isLoggedIn = true;
    }

  }

  logout(): boolean {
    localStorage.setItem('userdetails', '')
    this.isLoggedIn = false;
    this.router.navigate([''])
    return this.isLoggedIn;

  }
  decodeToken(token: string): any {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid JWT token');
      }

      const encodedPayload = parts[1];
      const decodedPayload = atob(encodedPayload);
      const payloadObj = JSON.parse(decodedPayload);

      this.userRole =
        payloadObj[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];

      if (this.userRole == 'Admin') {
        localStorage.setItem('userdetails', payloadObj);
        this.router.navigate(['home']);
        this.isLoggedIn = true
      } else {
        alert('You are not a Admin.');
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

}
