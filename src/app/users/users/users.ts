import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
private http = inject(HttpClient);

userObj = {
  name: '',
  email: '',
  password: '',
  phone: '',
  role: '',
  isActive: true
}

users:any[] = [];
  getTable()
  {
    this.http.get('http://localhost:5000/api/users/getAllUsers')
    .subscribe({
      next: (res:any) => {
        console.log(res);
        this.users = res;
      },

      error: (err) => {
        console.log(err);
      }
    });
  }

  constructor() {
    this.getTable();
  }
}
