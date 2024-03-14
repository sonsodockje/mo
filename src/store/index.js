import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLogin: false,
  loginToggleAction: () => {
    set((state) => ({ isLogin: !state.isLogin }));
  },
}));
