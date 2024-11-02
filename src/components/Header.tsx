import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import HeaderForm from "./HeaderForm"

export default function Header() {

    const {pathname} = useLocation()

    const isHome = useMemo(() => pathname === '/' , [pathname])

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
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
                            isActive? 'text-orange-500 uppercase font-bold' 
                            : 'text-white uppercase font-bold'}
                    >Home</NavLink>
                    <NavLink 
                        to="/favorites"
                        className={({isActive}) => 
                            isActive? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
                    >Favorites</NavLink>
                </nav>
            </div>
            {/* Cuando estamos en la pagina de home, mostramos el formulario */}
            {isHome && (<HeaderForm/>)}
        </div>
    </header>
  )
}
