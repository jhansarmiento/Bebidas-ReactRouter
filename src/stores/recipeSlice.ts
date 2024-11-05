import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecypeSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilter : SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecypeSliceType> = (set) => ({
    
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,

    // Consulta las categorías que mostraremos en el form desde la API
    fetchCategories: async () => {
        // Llama la función que consulta la API, la función debe ser asíncrona
        const categories = await getCategories()
        set({
            categories
        })
    },

    // Busca las recetas en la API con la información que tenemos del form al darle Submit
    searchRecipes: async (searchFilter) => {
        const drinks = await getRecipes(searchFilter)
        set({
            drinks
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe
        })
    }
})