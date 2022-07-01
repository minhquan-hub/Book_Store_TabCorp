import { Injectable } from '@angular/core';

const TOKEN = 'auth-token';
const ROLE = 'role';
const Email = 'email'
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  logOut(): void {
    localStorage.clear();
  }
  public saveDataUser(token: string, role: string, email: string): void {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(ROLE);
    localStorage.removeItem(Email);
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(ROLE, role);
    localStorage.setItem(Email, email);
  }
  public getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  public getRole(): string | null {
    return localStorage.getItem(ROLE);
  }
}
