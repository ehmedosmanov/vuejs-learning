import { defineStore } from "pinia";


export const useWishlist = defineStore('wishlist', {
    state: () => ({
        wishlist: []
    }),
    getters: {
        isInWishlist: (state) => (id) => {
            return state.wishlist.some(product => product.id === id)
        }
    },
    actions: {
        addToWishlist(item) {
            const existingProduct = this.wishlist.find(product => product.id === item.id)
            if (!existingProduct) {
                this.wishlist.push(item)
            }
        },
        removeFromWishlist(id) {
            const index = this.wishlist.findIndex(p => p.id === id)
            if (index !== -1) this.wishlist.splice(index, 1)
        }
    },
    persist: {
        key: 'wishlist',
        storage: localStorage
    }
})