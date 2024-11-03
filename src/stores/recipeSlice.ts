import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import { Categories } from "../types"

export type RecypeSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecypeSliceType> = (set) => ({
    categories: {
        drinks: []
    },

    fetchCategories: async () => {
        // Llama la función que consulta la API, la función debe ser asíncrona
        const categories = await getCategories()
        set({
            categories
        })
    }
})