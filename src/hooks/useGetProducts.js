import { getProducts } from "@/services/products"
import { onMounted, ref } from "vue"

export const useGetProducts = () => {
    const loading = ref(false)
    const error = ref(null)
    const products = ref([])
    const loadProducts = async () => {
        loading.value = true
        error.value = null
        try {
            const data = await getProducts()
            products.value = data
        } catch (error) {
            console.error(error)
            error.value = err.message || 'Something went wrong'
        } finally {
            loading.value = false
        }
    }
    onMounted(() => {
        loadProducts()
    })
    return { loading, error, products, loadProducts }
}