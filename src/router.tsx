import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"

//Mejora el performance al separar el código JS
const FavoritesPage = lazy(() => import("./views/FavoritesPage"))
const IndexPage = lazy(() => import("./views/IndexPage"))

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={
                //Mejora el performance al separar el código JS
                <Suspense fallback="Loading...">
                  <IndexPage />
                </Suspense>
              } index/>
              <Route path="/favorites" element={
                //Mejora el performance al separar el código JS
                <Suspense fallback="Loading...">
                  <FavoritesPage />
                </Suspense>
              }/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
