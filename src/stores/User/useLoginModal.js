const { create } = require("zustand");

const useLoginModalStore = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}))

export default useLoginModalStore;