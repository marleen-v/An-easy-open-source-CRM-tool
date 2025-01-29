import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(),   
    provideNativeDateAdapter(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-60ba9","appId":"1:417035411416:web:1c065398bf7b5aa5785cad","storageBucket":"simple-crm-60ba9.firebasestorage.app","apiKey":"AIzaSyAUnPuo2eYI3sfOnVdBcD2NNHki7q4RHqo","authDomain":"simple-crm-60ba9.firebaseapp.com","messagingSenderId":"417035411416"})), provideFirestore(() => getFirestore()),    
    ]
};
