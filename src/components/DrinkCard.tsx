import { Drink } from "../types"


type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {
    // Muestra las tarjetas que contiene la receta para preparar las bebidas
    return (
        <div>
            <h2>
                {drink.strDrink}
            </h2>
        </div>
    )
}
