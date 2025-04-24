const { create } = require("zustand");
const { persist } = require("zustand/middleware");

const useUserStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (userData) => set({ user: userData }),
            logout: () => set({ user: null })
        }),
        {
            name: "user-storage"
        }
    )
);

export default useUserStore;