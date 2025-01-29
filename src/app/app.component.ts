import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterOutlet, Routes, RouterLinkActive, RouterLink } from '@angular/router';
import { ToolbarComponent } from "./shared/toolbar/toolbar.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, RouterOutlet, RouterLink, MatTooltipModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-crm';

  firestore: Firestore = inject(Firestore);

}
