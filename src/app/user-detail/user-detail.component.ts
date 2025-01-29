import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  docSnapshots,
  doc,
  onSnapshot,
} from '@angular/fire/firestore';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from './../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  firestoreService = inject(FirebaseService);
  userId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //gets user-id from url
    this.route.params.subscribe((params) => {
      this.userId = params['id']; // id from app.routes.ts!
    });

    if (this.userId) {
      this.firestoreService.getSingleUser(this.userId);
    }
  }

  ngOnDestroy() {
    this.firestoreService.unsubscribeToSingleUser();
  }

  openEditDialog():void{

   /*   const dialog = this.dialog.open(DialogEditUserComponent); 
     dialog.componentInstance.user = this.firestoreService.userInfo ; */
     console.log(this.firestoreService.userInfo);
     

  }
}
