// Importa a função para inicializar o app Firebase
import {initializeApp} from 'firebase/app'
// Importa o serviço de autenticação do Firebase
import {getAuth} from 'firebase/auth'
// Importa o serviço de banco de dados Firestore do Firebase
import {getFirestore} from 'firebase/firestore'

// Configuração das credenciais do Firebase com as credenciais que teremos depois de configurar nosso projeto no Firebase
const firebaseConfig = {
    apiKey: "" , // chave pública da API
    authDomain: "", // Domínio autorizado para autenticação
    projectId: "", // Id do projeto Firebase
    StorageBucket: "", // Bucket para armazenar arquivos
    messageingSendrId: "",  // Id do remetente da mensagem ( push notifications)
    appId: "",  // id do app Firebase Web
}
// Inicializa o app Firebase com as configurações acima
const app = initializeApp(firebaseConfig)
// Exporta o serviço de autenticação inicializado 
export const auth = getAuth(app)
// Exporta o serviço Firestore (que é o banco de dados em nuvem)
export const db = getFirestore(app)