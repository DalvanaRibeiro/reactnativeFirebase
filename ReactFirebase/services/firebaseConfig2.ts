// Configura o Firebase com Firestore e Storage
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCXKUpy5bXPPNrstc6ayHQTcXLjbwsNnEw",          // Chave pública da API
  authDomain: "tasks-b52c5.firebaseapp.com",                  // Domínio autorizado para autenticação
  projectId: "tasks-b52c5",                                   // ID do projeto Firebase
  storageBucket: "tasks-b52c5.firebasestorage.app",           // Bucket para armazenar arquivos (storage)
  messagingSenderId: "768498658017",                          // ID do remetente para mensagens (push notifications)
  appId: "1:768498658017:web:b1fb529cdd07669e22e5a0",        // ID do app Firebase para web
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
