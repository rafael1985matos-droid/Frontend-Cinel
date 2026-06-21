import { keys } from './environment.keys';


// nota: deparei-me com um erro no apikey, quando fiz ng s no prompt de comando deu uma msg de erro que pedi à IA para me ajudar
// e no envirnment.ts tinha apikey com o (k) em letra maiuscula

export const environment = {
  production: true,
  firebaseConfig: {
    apikey: keys.apikey,
    authDomain: 'tarefa02-7fe94.firebaseapp.com',
    projectId: 'tarefa02-7fe94',
    storageBucket: 'tarefa02-7fe94.firebasestorage.app',
    messagingSenderId: '918084869407',
    appId: '1:918084869407:web:23dcb88108f3486cd5642a',
  },
};
