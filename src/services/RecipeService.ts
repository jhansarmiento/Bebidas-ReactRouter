import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../utils/recipes-schema"
import { Drink, SearchFilter } from "../types"

// Función que consulta las categorías en la API
export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

    const {data} = await axios(url)
    // Valida la respuesta de la API
    const result = CategoriesAPIResponseSchema.safeParse(data)
    // Retornamos el result.data
    if(result.success) {
        return result.data
    }
}

// Función que consulta las recetas en la API
export async function getRecipes(searchFilter : SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilter.category}&i=${searchFilter.ingredient}`

    const {data} = await axios(url)
    // Valida la respuesta de la API
    const result = DrinksAPIResponseSchema.safeParse(data)
    if(result.success){
        return result.data
    }
}

export async function getRecipeById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

    const {data} = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if(result.success) {
        return result.data
    }
}