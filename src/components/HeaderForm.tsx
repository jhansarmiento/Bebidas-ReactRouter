import { ChangeEvent, useEffect, useState } from "react";
import { useAppStore } from "../stores/useAppStore";


export default function HeaderForm() {

  const [searchFilter, setsearchFilter] =useState({
    ingredient: '',
    category: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setsearchFilter({
      ...searchFilter,
      [e.target.name] : e.target.value
    })
  }

  const fecthCategories = useAppStore( state => state.fetchCategories)
  const categories = useAppStore( state => state.categories)

  useEffect(() => {
    fecthCategories()
  }, [])

  return (
    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
      <div className="space-y-4">
        <label
          htmlFor="ingredient"
          className="block text-white uppercase font-extrabold text-lg"
        >
          Name Or Ingredients
        </label>

        <input
          type="text"
          id="ingredient"
          name="ingredient"
          className="p-3 w-full rounded-lg focus:outline-none"
          placeholder="Name Or Ingredient. E.g Vodka, Tequila, Coffee"
          onChange={handleChange}
          value={searchFilter.ingredient}
        />
      </div>

      <div className="space-y-4">
        <label
          htmlFor="category"
          className="block text-white uppercase font-extrabold text-lg"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="p-3 w-full rounded-lg focus:outline-none"
          onChange={handleChange}
          value={searchFilter.category}
        >
          <option value="">-- Select An Option --</option>
          {/* Muestra las categorías al iterar la respuesta de la API */}
          {categories.drinks.map(category => (
            <option 
              key={category.strCategory}
              value={category.strCategory}
            >{category.strCategory}</option>
          ))}
        </select>
        <input
          type="submit"
          value="Search Recipes"
          className="cursor-pointer bg-orange-700 hover:bg-orange-900 
                         text-white font-extrabold w-full p-2 rounded-lg uppercase"
        />
      </div>
    </form>
  );
}
