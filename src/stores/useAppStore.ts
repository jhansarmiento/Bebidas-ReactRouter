import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecypeSliceType } from "./recipeSlice";

export const useAppStore = create<RecypeSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
})))