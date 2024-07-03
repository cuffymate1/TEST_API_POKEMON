import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from "./error-page";
import Pocket from './components/Pocket.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PokemonDetail from './components/PokemonDetail.jsx';


const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
},
{
  path:"Pocket",
  element:<Pocket />,
  errorElement: <ErrorPage />,
},
{
  path:"PokemonDetail/:id",
  element:<PokemonDetail />,
  errorElement: <ErrorPage />,
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} exact/>
  </React.StrictMode>,
)
