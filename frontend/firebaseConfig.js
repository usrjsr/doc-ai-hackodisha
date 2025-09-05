import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCepd23BbtPUB9koqSbcOp0t4WVCmQPEG4",
  authDomain: "doc-ai-c204f.firebaseapp.com",
  projectId: "doc-ai-c204f",
  storageBucket: "doc-ai-c204f.firebasestorage.app",
  messagingSenderId: "214381226149",
  appId: "1:214381226149:web:bc90d58345fdbd76da854c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();