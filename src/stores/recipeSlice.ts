import { StateCreator } from "zustand"

type Category = {}

export type RecypeSliceType = {
    categories: Category[]
}

export const createRecipesSlice : StateCreator<RecypeSliceType> = () => ({
    categories: []
})