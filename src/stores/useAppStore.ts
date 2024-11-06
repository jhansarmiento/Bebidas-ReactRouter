import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecypeSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType} from "./favoritesSlice"

export const useAppStore = create<RecypeSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)
})))