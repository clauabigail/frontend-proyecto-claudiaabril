import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import LayoutBase from "../layouts/LayoutBase"

import PrivateRoute from "./PrivateRoute"
import { UserProvider } from "../context/UserContext"
import NewBudget from "../pages/NewBudget"
import CatalogoComponentes from "../pages/CatalogoComponentes"
import ActualizarEquipo from "../pages/ActualizarEquipo"

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutBase />}>

            <Route element={<PrivateRoute />}>
              <Route index element={<Home />} />
              <Route path='/catalogo-componentes' element={<CatalogoComponentes />} />
              <Route path="/actualizar-equipo" element={<ActualizarEquipo/>}/>

            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default Router