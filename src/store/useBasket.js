import { defineStore } from "pinia";

export const useBasket = defineStore('basket', {
    state: () => ({
        basket: []
    }),
    getters: {
        total: (state) => {
            return state.basket.reduce((acc, product) => acc + product.price * product.quantity, 0)
        },
        isInBasket: (state) => (id) => {
            return state.basket.some(product => product.id === id)
        },
        productPriceWithQuantity: (state) => (id) => {
            const product = state.basket.find(product => product.id === id);
            return product ? product.price * product.quantity : 0;
        }
    },
    actions: {
        addProduct(item) {
            const existingProduct = this.basket.find(product => product.id === item.id)
            if (existingProduct) {
                existingProduct.quantity++
            } else {
                this.basket.push({ ...item, quantity: 1 })
            }
        },
        removeFromBasket(id) {
            const index = this.basket.findIndex(p => p.id === id)
            if (index !== -1) this.basket.splice(index, 1)
        },
        increaseQuantity(id) {
            const existProduct = this.basket.find(product => product.id === id)
            if (existProduct) {
                existProduct.quantity++
            }
        },
        decreaseQuantity(id) {
            const existProduct = this.basket.find(product => product.id === id)
            if (!existProduct) return

            if (existProduct.quantity > 1) {
                existProduct.quantity--
            } else {
                const index = this.basket.findIndex(p => p.id === id)
                if (index !== -1) this.basket.splice(index, 1)
            }
        }
    },
    persist: {
        key: 'basket',
        storage: localStorage
    }
})