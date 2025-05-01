import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './componentes/Layout/Layout'
import HomePage from './paginas/HomePage'
import AcercaPage from './paginas/AcercaPage'
import LoginPage from './paginas/LoginPage'
import CiudadPage from './paginas/CiudadPage'
import MonumentosCiudadPage from './paginas/MonumentosCiudadPage'
import ComidasCiudadPage from './paginas/ComidasCiudadPage'
import EventosCiudadPage from './paginas/EventosCiudadPage'

const router = createBrowserRouter([
  {
    path:"/",
        element:<Layout/>,
        children:[
          {
            index:true,
            element:<HomePage/>,
          },
          {
            path:`ciudad/:id`,
            element:<CiudadPage></CiudadPage>,
          },
          {
            path:"ciudad/:id/comidas",
            element:<ComidasCiudadPage></ComidasCiudadPage>,
          },
          {
            path:"ciudad/numero/comidas/numero",
            element:<p>Comida</p>,
          },
          {
            path:"ciudad/:id/monumentos",
            element:<MonumentosCiudadPage></MonumentosCiudadPage>,
          },
          {
            path:"ciudad/:id/monumentos/numero",
            element:<p>Monumento</p>,
          },
          {
            path:"ciudad/:id/eventos",
            element:<EventosCiudadPage></EventosCiudadPage>,
          },
          {
            path:"ciudad/numero/eventos/numero",
            element:<p>Comida</p>,
          },
          {
            path:"acerca",
            element:<AcercaPage/>,
          },
          {
            path:"datos_usuario",
            element:<p>Informacion Usuario</p>,
          },
          {
            path:"/login",
            element:<LoginPage/>,
          },
          {
            path:"/logout",
            element:<p>Logout</p>,
          },
          {
            path:"/ranking",
            element:<p>Ranking</p>,
          }
        ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
