import { create } from "zustand";
import { persist } from "zustand/middleware";

export const contractStore = create(
  persist(
    (set) => ({
      contract: null,
      setContract: (data) => set(() => ({ contract: data })),
    }),
    {
      name: "contract-storage", // Storage name
      getStorage: () => sessionStorage, // Use sessionStorage
    }
  )
);

export const accountStore = create((set) => ({
  account: "",
  setAccount: (data) => set(() => ({ account: data })),
}));

export const providerStore = create((set) => ({
  provider: null,
  setProvider: (data) => set(() => ({ provider: data })),
}));
