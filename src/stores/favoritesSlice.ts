import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

// Slice Pattern
export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id : Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}


// <FavoritesSliceType & RecipeSliceType, [], [], FavoritesSliceType> => este codigo es necesario
// Para consumir el estado de otro slice en este slice, en este caso lo estamos haciendo para consumir
// la función de closeModal de recipeSlice en este slice

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipeSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],

    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idDrink)) {
            // Si la receta ya está en favoritos, filtra favorites y elimina la receta
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            //// Escribe en el estate de notification
            createNotificationSlice(set, get, api).showNotification({
                text: `${recipe.strDrink} was removed from favorites`, 
                error: false
            })
        } else {
            console.log('la receta no existe en favoritos')
            // Escribe en favorites cuando llamamos la función de handleClickFavorite
            set(state => ({
                favorites: [...state.favorites, recipe]
            }))
            // Escribe en el estate de notification
            createNotificationSlice(set, get, api).showNotification({
                text: `${recipe.strDrink} was added to favorites`, 
                error: false
            })
        }
        createRecipesSlice(set, get, api).closeModal()
        // Guardando los favoritos en Local Storage
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },

    favoriteExists: (id) => {
        // Verifica si la bebida ya existe en favoritos
        return get().favorites.some(favorite => favorite.idDrink === id)
    },

    //función que escribe en favoritos lo que tenemos en Local Storage
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})