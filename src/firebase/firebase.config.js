import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB76Afke-vOGFWe2sxN_TolS40aDDj48Ow",
  authDomain: "recipe-app-842e2.firebaseapp.com",
  projectId: "recipe-app-842e2",
  storageBucket: "recipe-app-842e2.appspot.com",
  messagingSenderId: "189919465636",
  appId: "1:189919465636:web:9715e46614d6b756a71631"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;