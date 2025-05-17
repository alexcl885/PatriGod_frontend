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
import ComidaPage from './paginas/ComidaPage'
import MonumentoPage from './paginas/MonumentoPage'
import EventoPage from './paginas/EventoPage'
import RankingPage from './paginas/RankingPage'
import RankingArticulosPage from './paginas/RankingArticulosPage'
import { UserProvider } from './contexto/UserContext'
import RegisterInSide from './componentes/Registro/RegisterInSide'
import GestionUsuariosPage from './paginas/GestionUsuariosPage'
import AddNewMonumentoPage from './paginas/AddNewMonumentoPage'
import AddNewEventoPage from './paginas/AddNewEventoPage'
import AddNewComidaPage from './paginas/AddNewComidaPage'
import DetallesUsuarioPage from './paginas/DetallesUsuarioPage'
import EnviarEmailUsuarios from './componentes/EnviarEmailUsuarios/EnviarEmailUsuarios'
import ErrorPage from './paginas/ErrorPage'

const router = createBrowserRouter([
  {
    path:"/",
        element:<Layout/>,
        errorElement: <ErrorPage/>,
        children:[
          {
            index:true,
            element:<HomePage/>,
          },
          {
            path:`ciudad/:id`,
            element:<CiudadPage/>,
          },
          {
            path:"ciudad/:id/comidas",
            element:<ComidasCiudadPage/>,
          },
          {
            path:"ciudad/:id/comidas/:idComida",
            element:<ComidaPage></ComidaPage>,
          },
          {
            path:"ciudad/:id/monumentos",
            element:<MonumentosCiudadPage/>,
          },
          {
            path:"ciudad/:id/monumentos/:idMonumento",
            element:<MonumentoPage/>,
          },
          {
            path:"ciudad/:id/eventos",
            element:<EventosCiudadPage/>,
          },
          {
            path:"ciudad/:id/eventos/:idEvento",
            element:<EventoPage></EventoPage>,
          },
          {
            path:"ciudad/:id/add/monumento",
            element:<AddNewMonumentoPage></AddNewMonumentoPage>,
          },
          {
            path:"ciudad/:id/add/comida",
            element:<AddNewComidaPage></AddNewComidaPage>,
          },
          {
            path:"ciudad/:id/add/evento",
            element:<AddNewEventoPage></AddNewEventoPage>,
          },
          {
            path:"acerca",
            element:<AcercaPage/>,
          },
          {
            path:"datos_usuario",
            element:<DetallesUsuarioPage/>,
          },
          {
            path:"/login",
            element:<LoginPage/>,
          },
          {
            path:"/register",
            element:<RegisterInSide/>,
          },
          {
            path:"/ranking",
            element:<RankingPage/>,
          },
          {
            path:"/ranking/articulos",
            element:<RankingArticulosPage/>,
          },
          {
            path:"/usuarios",
            element:<GestionUsuariosPage/>,
          },
          {
            path:"/actualizacionPatrigod",
            element:<EnviarEmailUsuarios/>,
          }
        ]
  }
])
function App() {
  return (
    <>
      <UserProvider>
      <RouterProvider router={router}/>
      </UserProvider>
    </>
  )
}

export default App
