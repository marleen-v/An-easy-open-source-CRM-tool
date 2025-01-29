import { Injectable, OnInit, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  docSnapshots,
  doc,
  onSnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  users$: Observable<any[]>;
  usersArray: any[] = [];

  userInfo: any[] =[];

  private unsubSingleUser: (() => void) | null = null;

  firestore: Firestore = inject(Firestore);

  unsubUsers;
  /*   unsubSingleUser; */

  constructor() {
    // CollectionData() -- Real-time data transfer with async pipe in template
    this.users$ = collectionData(this.getUsersRef(), { idField: 'id' });

    // Convert the observable data into a pure JavaScript-Array
    this.users$
      .pipe(
        map((items) =>
          items.map((item) => ({
            ...item,
          }))
        ) // removes Prototypen
      )
      .subscribe((data) => {
        this.usersArray = data;
        console.log('usersArray', this.usersArray);
      });

    //or:
    /* this.items$.subscribe(data => {
      this.usersArray = JSON.parse(JSON.stringify(data));
      console.log('Reines Array ohne Prototypen:', this.itemsArray);
    }); */

    //--------------- gerade nur collectionData() in Nutzung!! --- untenstehende Zeilen  im Constructor können erst einmal ignoriert werden

    this.unsubUsers = onSnapshot(this.getUsersRef(), (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })); 
      console.log('Current Users:', users);
    });
  }

  ngOnInit() {}

  async addUser(userData: User) {
    try {
      const plainUserData = { ...userData }; // userdaten müssen in reines JavaScript-Object umgewandelt werden, dies kann man man mit der Spread-Syntax (...) machen --> extrahiert nur die Felder des Objekts und entfernt Prototyp-Eigenschaften

      const docRef = await addDoc(this.getUsersRef(), plainUserData);
      console.log('Dokument hinzugefügt mit ID:', docRef.id);
      /* loadingElement = false; */
    } catch (error) {
      console.error('Fehler beim Hinzufügen:', error);
    }
  }

  getSingleUser(userId: string) {
    if (!userId) {
      console.error('there is no user with this id found');
      return;
    }

    /*   // Falls bereits ein Listener existiert, diesen zuerst beenden
     this.unsubscribeToSingleUser();
    } */

    this.unsubSingleUser = onSnapshot(
      this.getSingleDocumentRef('users', userId),
      (user) => {
        if (user.exists()) {
          this.userInfo = [{ id: user.id, ...user.data() }]; 
          console.log(this.userInfo);
          
        } else {
          console.log('dosument does not exist anymore');
          this.userInfo = [];
        }
      }
    );
  }

  unsubscribeToSingleUser() {
    //for user-detail-Componente --> ngOnDestroy()
    if (this.unsubSingleUser) {
      this.unsubSingleUser();
      this.unsubSingleUser = null;
      console.log('Listener gestoppt');
    }
  }

  ngOnDestroy() {
    // Listener entfernen
    if (this.unsubUsers) {
      this.unsubUsers();
      console.log('Listener wurde abgemeldet.');
    }
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  getSingleDocumentRef(collectionId: string, documentId: string) {
    return doc(collection(this.firestore, collectionId), documentId);
  }
}
