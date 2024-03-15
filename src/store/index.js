import { initializeApp } from "firebase/app";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLogin: false,
  loginToggleAction: () => {
    set((state) => ({ isLogin: !state.isLogin }));
  },
}));

//evn파일에 키값을 넣어두는게 좋다고해서.. 그렇게했읍니다..
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_UR,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
