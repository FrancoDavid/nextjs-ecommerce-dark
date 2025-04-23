const { create } = require("zustand");

const useCartStore = create((set) => ({
    cart: {
        items: [],
        total: 0,
        subtotal: 0,
        delivery: 10000
    },
    addToCart: (item) => set((state) => ({ cart: { items: [...state.cart.items, item]}})),
    removeFromCart: (itemId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== itemId)
    })),
    clearCart: () => set({ cart: [] }),
    getCart: () => set((state) => ({ cart: state.cart })),
    calculateTotal: () => set((state) => {
        const subtotal = state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const total = subtotal + state.cart.delivery;
        return { cart: { ...state.cart, subtotal, total } };
    })
}));

export default useCartStore;