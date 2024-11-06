import { StateCreator } from "zustand";
import { Recipe } from "../types";

// Slice Pattern
export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],

    handleClickFavorite: (recipe) => {
        if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            console.log('la receta no existe en favoritos')
            // Escribe en favorites cuando llamamos la función de handleClickFavorite
            set(state => ({
                favorites: [...state.favorites, recipe]
            }))
        }
    }
})