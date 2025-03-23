import { api } from "@/api"

export const getProducts = async () => {
    try {
        const res = await api.get('/items')
        if (!res.data) {
            throw new Error('No data')
        }
        return res.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export const createProduct = async (values) => {
    try {
        const res = await api.post('/items', values)
        if (!res.data) {
            throw new Error('No data')
        }
        return res.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export const updateProduct = async (id, values) => {
    try {
        const res = await api.put(`/items/${id}`, values)
        if (!res.data) {
            throw new Error('No data')
        }
        return res.data
    } catch (error) {
        console.error(error)
        return null
    }
}