import { keys } from './environment.keys';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: keys.apiKey,
    authDomain: 'frontend-cinel-rafa.firebaseapp.com',
    projectId: 'frontend-cinel-rafa',
    storageBucket: 'frontend-cinel-rafa.firebasestorage.app',
    messagingSenderId: '361169501102',
    appId: '1:361169501102:web:491997e790687dcf5b263f',
  },
};
