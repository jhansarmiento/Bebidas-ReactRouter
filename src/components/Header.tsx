import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {

    const {pathname} = useLocation()

    const isHome = useMemo(() => pathname === '/' , [pathname])

  return (
    <header className="bg-slate-800">
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/public/logo.svg" alt="logo" className="w-32"/>
                </div>
                
                <nav className="flex gap-4">
                    {/* Navegación entre páginas con NavLink resaltando la página actual*/}
                    <NavLink 
                        to="/"
                        className={({isActive}) => 
                            isActive? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
                    >Home</NavLink>
                    <NavLink 
                        to="/favorites"
                        className={({isActive}) => 
                            isActive? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
                    >Favorites</NavLink>
                </nav>
            </div>

            {isHome && (
                <form 
                    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                >
                    <div className="space-y-4">
                        <label 
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"
                        >Name Or Ingredients</label>

                        <input 
                            type="text"
                            id="ingredient"
                            name="ingredient"
                            className="p-3 w-full rounded-lg focus:outline-none"
                            placeholder="Name Or Ingredient. E.g Vodka, Tequila, Coffee"
                        />
                    </div>

                    <div className="space-y-4">
                        <label 
                            htmlFor="category"
                            className="block text-white uppercase font-extrabold text-lg"
                        >Category</label>
                        <select 
                            id="category"
                            name="category"
                            className="p-3 w-full rounded-lg focus:outline-none"
                        >
                            <option value="">-- Select An Option --</option>
                        </select>
                        <input 
                            type="submit" 
                            value="Search Recipes" 
                            className="cursor-pointer bg-orange-700 hover:bg-orange-900 
                                text-white font-extrabold w-full p-2 rounded-lg uppercase"
                        />
                    </div>
                </form>
            )}
        </div>
    </header>
  )
}
