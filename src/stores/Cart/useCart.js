const { create } = require("zustand");
const { persist } = require("zustand/middleware");

const useCartStore = create(
    persist(
        (set) => ({
            cart: {
                items: [],
                total: 0,
                subtotal: 0,
                delivery: 2000
            },
            addToCart: (item) => set((state) => ({ cart: { ...state.cart, items: [...state.cart?.items, item] } })),
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
            clearCart: () => set({ cart: {
                items: [],
                total: 0,
                subtotal: 0,
                delivery: 2000
            } }),
            getCart: () => set((state) => ({ cart: state.cart })),
            calculateTotal: () => set((state) => {
                console.log("Calculating total", state);
                const subtotal = state.cart.items?.reduce((acc, item) => acc + item.price * item.quantity, 0);
                const total = subtotal + state.cart.delivery;
                return { cart: { ...state.cart, subtotal, total } };
            })
        }),
        {
            name: "cart-storage"
        }
    )
);

export default useCartStore;