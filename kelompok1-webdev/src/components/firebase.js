import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDahGy8vNxx3i62p7MIReZry8C5lTbbS5A",
  authDomain: "kelompok1-iot-891c8.firebaseapp.com",
  databaseURL: "https://kelompok1-iot-891c8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kelompok1-iot-891c8",
  storageBucket: "kelompok1-iot-891c8.appspot.com",
  messagingSenderId: "722088167406",
  appId: "1:722088167406:web:cd3066f016455058ad70ff",
  measurementId: "G-1B32HS9412"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { firebaseConfig, database }; 