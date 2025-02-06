import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'vazgar-cycling',
        appId: '1:1065176572735:web:0acc3419fa1d98457ea98a',
        storageBucket: 'vazgar-cycling.firebasestorage.app',
        apiKey: 'AIzaSyCEVTwA8WvQ0wLRN5A7DPsQ8aYCQDInFSA',
        authDomain: 'vazgar-cycling.firebaseapp.com',
        messagingSenderId: '1065176572735',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
