import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-menu-item',
  imports: [FormsModule],
  templateUrl: './add-menu-item.html',
  styleUrl: './add-menu-item.scss',
})
export class AddMenuItem {

  constructor(private http: HttpClient , ) { }
 allMenuItems: any[] = [];
  selectedFile!: File;

  menu = {
  name: '',
  category: '',
  price: 0,
  available: true
};

  onFileSelect(event: any) {

    this.selectedFile = event.target.files[0];

  }

addMenuItem() {

  const formData = new FormData();

  formData.append('name', this.menu.name);

  formData.append('category', this.menu.category);

  formData.append('price', this.menu.price.toString());

  formData.append(
    'available',
    this.menu.available.toString()
  );

  formData.append('image', this.selectedFile);

  this.http.post(
    'http://localhost:5000/api/menu/createMenuItem',
    formData
  ).subscribe(res => {

    console.log(res);

  });

}
getMenuItems() {

  this.http.get(
    'http://localhost:5000/api/menu/getAllMenuItems'
  ).subscribe(res => {

    console.log(res);
    this.allMenuItems = res as any[];

  });

}



}
