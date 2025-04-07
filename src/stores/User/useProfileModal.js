const { create } = require("zustand");

const useProfileModalStore = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}))

export default useProfileModalStore;