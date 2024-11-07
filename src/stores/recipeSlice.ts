import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"
import { FavoritesSliceType } from "./favoritesSlice"

export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilter : SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}
// <StateCreator<RecipeSliceType & FavoritesSliceType, [], [], RecipeSliceType> => este codigo es necesario
// Para consumir el estado de otro slice en este slice

export const createRecipesSlice : StateCreator<RecipeSliceType & FavoritesSliceType, [], [], RecipeSliceType> = (set) => ({
    
    categories: {
        drinks: []
    },

    drinks: {
        drinks: []
    },

    selectedRecipe: {} as Recipe,

    modal: false,

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

    //Selecciona una receta de las recetas que proporciona la API y abre el modal
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },

    // Función que cierra el modal y reinicia el state de la receta seleccionada
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }

})