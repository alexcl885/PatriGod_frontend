import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './componentes/Layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import CityPage from './pages/CityPage'
import CityMonumentsPage from './pages/CityMonumentsPage'
import CityFoods from './pages/CityFoods'
import CityEventsPage from './pages/CityEventsPage'
import FoodPage from './pages/FoodPage'
import MonumentPage from './pages/MonumentPage'
import EventPage from './pages/EventPage'
import RankingPage from './pages/RankingPage'
import RankingArticulosPage from './pages/RankingArticulosPage'
import { UserProvider } from './context/UserContext'
import RegisterInSide from './componentes/Registro/RegisterInSide'
import GestionUsuariosPage from './pages/GestionUsuariosPage'
import AddNewMonumentPage from './pages/AddNewMonumentoPage'
import AddNewEventPage from './pages/AddNewEventoPage'
import AddNewFoodPage from './pages/AddNewComidaPage'
import UserDetailsPage from './pages/UserDetailsPage'
import SendEmailUsers from './componentes/SendEmailUsers/SendEmailUsers'
import ErrorPage from './pages/ErrorPage'
import 'react-toastify/dist/ReactToastify.css';

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
            path:`city/:id`,
            element:<CityPage/>,
          },
          {
            path:"city/:id/foods",
            element:<CityFoods/>,
          },
          {
            path:"city/:id/foods/:idFood",
            element:<FoodPage/>,
          },
          {
            path:"city/:id/monuments",
            element:<CityMonumentsPage/>,
          },
          {
            path:"city/:id/monuments/:idMonument",
            element:<MonumentPage/>,
          },
          {
            path:"city/:id/events",
            element:<CityEventsPage/>,
          },
          {
            path:"city/:id/events/:idEvent",
            element:<EventPage/>,
          },
          {
            path:"ciudad/:id/add/monumento",
            element:<AddNewMonumentPage/>,
          },
          {
            path:"ciudad/:id/add/comida",
            element:<AddNewFoodPage/>,
          },
          {
            path:"ciudad/:id/add/evento",
            element:<AddNewEventPage/>,
          },
          {
            path:"acerca",
            element:<AboutPage/>,
          },
          {
            path:"datos_usuario",
            element:<UserDetailsPage/>,
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
            element:<SendEmailUsers/>,
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
