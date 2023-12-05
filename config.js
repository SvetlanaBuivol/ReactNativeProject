// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import { getReactNativePersistence } from 'firebase/auth';
import { initializeAuth } from 'firebase/auth';
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDHBl1tEw_RuTblD2GGCdEjBbrPa8irE5Y',
  authDomain: 'postscreator.firebaseapp.com',
  databaseURL: '<https://postscreator-default-rtdb.europe-west1.firebasedatabase.app>',
  projectId: 'postscreator',
  storageBucket: 'postscreator.appspot.com',
  messagingSenderId: '237674469026',
  appId: '1:237674469026:ios:a96a73102f6768f12ee9fb',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);