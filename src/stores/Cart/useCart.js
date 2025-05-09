const { create } = require("zustand");

const useCartStore = create((set) => ({
    cart: {
        items: [],
        total: 0,
        subtotal: 0,
        delivery: 10000
    },
    addToCart: (item) => set((state) => ({ cart: {...state.cart, items: [...state.cart?.items, item]}})),
    removeFromCart: (itemId) => set((state) => ({
        cart: {
            ...state.cart,
            items: state.cart.items.length === 1
                ? []
                : state.cart.items.length > 1
                    ? state.cart.items.filter(item => item.idProduct !== itemId)
                    : [...state.cart.items]
        }
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