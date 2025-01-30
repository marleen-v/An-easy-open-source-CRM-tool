import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from './../../models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { FirebaseService } from '../firebase.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatProgressBarModule,
    CommonModule 
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  firestore: Firestore = inject(Firestore);
  firestoreService = inject(FirebaseService);
  dialogRef = inject(MatDialogRef<DialogAddUserComponent>);

  user = new User();
  birthDate = new Date();
  loading = false;

  disabled = true;

  constructor() {
    this.user.birthday = this.birthDate.getTime();
  }

  saveUser() {
    this.loading = true;
    this.firestoreService.addUser(this.user);

    setTimeout(() => {
      this.dialogRef.close();
      this.loading = false;
    }, 500);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
