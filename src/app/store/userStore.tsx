import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ILoginType } from '../types/authType';

export const useUserStore = create(
  persist(
    () => ({
      user: {} as ILoginType
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
