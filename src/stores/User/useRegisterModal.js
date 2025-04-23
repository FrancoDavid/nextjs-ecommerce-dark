import { create } from "zustand";

const useRegisterModalStore = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useRegisterModalStore;