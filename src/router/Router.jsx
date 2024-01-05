import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import LayoutBase from "../layouts/LayoutBase"

import PrivateRoute from "./PrivateRoute"
import { UserProvider } from "../context/UserContext"
import ActualizarEquipo from "../pages/ActualizarEquipo"
import Equipos from "../pages/Equipos"
import Reporte from "../pages/Reporte"

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutBase />}>

            <Route element={<PrivateRoute />}>
              <Route index element={<Home />} />
              <Route path='/actualizar-equipo' element={<ActualizarEquipo />} />
              <Route path="/equipos" element={<Equipos/>}/>
              <Route path="/reporte" element={<Reporte/>}/>

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