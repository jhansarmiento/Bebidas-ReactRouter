import axios from "axios"
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema"

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