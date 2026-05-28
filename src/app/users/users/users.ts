import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [FormsModule],
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
  getUser()
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

  createUser(){
    this.http.post('http://localhost:5000/api/users/createUser', this.userObj)
    .subscribe({
      next: (res:any) => {
        console.log(res);
        this.getUser();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  constructor() {
    this.getUser();
  }
}
