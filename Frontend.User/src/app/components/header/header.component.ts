import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/token-storage.service';

const Email = 'email'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  isLogin() {
    return localStorage.getItem(Email);
  }

  isAdmin() {
    const checkAdmin = this.tokenStorageService.getRole()
    if(checkAdmin == 'Admin') return true;
    return false;
  }

  onLogout() {
    this.tokenStorageService.logOut();
  }

}
