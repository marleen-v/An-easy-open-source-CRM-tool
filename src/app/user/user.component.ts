import { Component, inject } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from './../dialog-add-user/dialog-add-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatTableModule, MatPaginatorModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  readonly dialog = inject(MatDialog);
  firestoreService = inject(FirebaseService);

  // for table
  displayedColumns: string[] = ['firstName', 'lastName',  'birthday', 'street', 'zipCode', 'city', 'id'];
  dataSource = this.firestoreService.usersArray;

  constructor(private router: Router) {}

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }

  navigateToUserInfo(userId: string){
    this.router.navigate(['/user/' + userId]);
  }
}
