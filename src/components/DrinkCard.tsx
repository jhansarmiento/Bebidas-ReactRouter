import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"


type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {

    const selectRecipe = useAppStore(state => state.selectRecipe)

    // Muestra las tarjetas que contiene la receta para preparar las bebidas
    return (
        <div className="border shadow-lg rounded-xl">
            <div className="p-6 overflow-hidden">
                <img 
                    src={drink.strDrinkThumb} 
                    alt={`Image of ${drink.strDrink}`}
                    className="rounded-lg hover:scale-110 transition-transform"
                />
            </div>
            <div className="p-5">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="bg-orange-400 hover:bg-orange-600 mt-5 w-full p-3 font-bold text-white text-lg uppercase rounded-lg"
                    onClick={() => selectRecipe(drink.idDrink)}
                >Show Recipe</button>
            </div>
        </div>
    )
}
