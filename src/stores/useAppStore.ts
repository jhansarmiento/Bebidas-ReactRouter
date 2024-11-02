import { create } from "zustand";
import { createRecipesSlice, RecypeSliceType } from "./recipeSlice";

export const useAppStore = create<RecypeSliceType>((...a) => ({
    ...createRecipesSlice(...a),
}))