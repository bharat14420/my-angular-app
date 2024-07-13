import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ApiService } from 'src/services/app.component.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: ApiService, private authService: AuthService) {}
  password: any;
  email: any;
  @ViewChild('myInput') myInput!: ElementRef;
  ngOnInit(): void {}

  login() {
    var token = '';
    this.service.login(this.email, this.password).subscribe((res) => {
      token = res.token;
      this.authService.decodeToken(token);
    });
  }
  toggle() {
    console.log(this.myInput.nativeElement.type);
    if (this.myInput.nativeElement.type == 'password') {
      this.myInput.nativeElement.type = 'text';
    } else {
      this.myInput.nativeElement.type = 'password';
    }
  }
}
