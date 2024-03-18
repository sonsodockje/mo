import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLogin: false,
  loginToggleAction: () => {
    set((state) => ({ isLogin: !state.isLogin }));
  },
}));

export const useSignUpStore = create((set) => ({
  email: "",
  password: "",
  name: "",
  setEmail: (email) => set({ email: email }),
  setPassword: (password) => set({ password: password }),
  setName: (name) => set({ name: name }),
}));
