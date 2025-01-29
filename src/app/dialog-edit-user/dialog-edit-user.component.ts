import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatProgressBarModule
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  firestore: Firestore = inject(Firestore);
  firestoreService = inject(FirebaseService);
  dialogRef = inject(MatDialogRef<DialogEditUserComponent>); 

  user :any[] =[];

  loading = false;


  constructor() {
   
  }

   saveUser() {
    /*
    this.loading = true;
    this.firestoreService.addUser(this.user);
    console.log(this.user);

    setTimeout(() => {
      this.dialogRef.close();
      this.loading = false;
    }, 1500);*/
  } 

  onNoClick(): void {
    this.dialogRef.close();
  }
}
