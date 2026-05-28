import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  imports: [],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.scss',
})
export class EditUser {
selectedFile!: File;

onFileSelect(event: any) {

  this.selectedFile = event.target.files[0];

}
}
