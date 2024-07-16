import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  isSidebarOpen = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    console.log(this.isSidebarOpen,"side")
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
