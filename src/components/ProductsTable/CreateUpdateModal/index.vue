<script setup>
import { createProduct, updateProduct } from '@/services/products'
import { useToast } from 'primevue'
import { computed, reactive, ref, watch } from 'vue'



const { openModal, updateId, products, loadProducts } = defineProps({
    openModal: {
        type: Boolean,
        default: false
    },
    updateId: {
        type: [String, null],
        default: null
    },
    products: {
        type: Array
    },
    loadProducts: {
        type: Function
    }
})

const emit = defineEmits(['closeCrudModal'])

const toast = useToast()

const values = reactive({
    title: '',
    price: 0,
    imageUrl: ''
})

const loading = ref(false)

const selectedProduct = computed(() => products.find(p => String(p.id) === String(updateId)))


watch(
    () => openModal,
    (value) => {
        document.body.style.overflow = value ? 'hidden' : 'auto'

        if (value && updateId && selectedProduct.value) {
            values.title = selectedProduct.value.title
            values.price = selectedProduct.value.price
            values.imageUrl = selectedProduct.value.imageUrl
        }

        if (value && updateId === null) {
            values.title = ''
            values.price = 0
            values.imageUrl = ''
        }
    }
)


const handleSubmitForm = async () => {
    loading.value = true
    try {
        if (updateId === null) {
            await createProduct(values)
            toast.add({
                severity: 'success',
                summary: 'Created',
                detail: 'Product created',
                life: 3000,
            })
        } else {
            await updateProduct(updateId, values)
            toast.add({
                severity: 'success',
                summary: 'Updated',
                detail: 'Product updated',
                life: 3000,
            })
        }

        await loadProducts()
        emit('closeCrudModal')

    } catch (error) {
        console.error(error)
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong',
            life: 3000,
        })
    } finally {
        loading.value = false
    }
}

</script>

<template>
    <div>
        <Transition name="fade">
            <div v-if="openModal" @click="$emit('closeCrudModal')" class="fixed inset-0 w-full h-full bg-black/40 z-40">
            </div>
        </Transition>

        <Transition name="fade">
            <div v-if="openModal" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
                <div class="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative z-50">
                    <h2 class="text-xl font-semibold mb-4">{{ updateId ? 'Update' : 'Create' }} Product</h2>

                    <form @submit.prevent="handleSubmitForm" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <BaseInput type="text" v-model="values.title"
                                class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Enter product title" />
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Price</label>
                            <input type="number" min="0" v-model="values.price"
                                class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Enter product price" />
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input type="text" v-model="values.imageUrl"
                                class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="https://..." />
                        </div>

                        <div class="flex justify-end gap-3 pt-4">
                            <button type="button" @click="$emit('closeCrudModal')"
                                class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                                Cancel
                            </button>

                            <button type="submit" :disabled="loading"
                                class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed">
                                <span v-if="loading">Saving...</span>
                                <span v-else>Save</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Transition>

    </div>
</template>



<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>