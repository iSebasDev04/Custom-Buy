import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx' // <--- Descomentado para que puedas usarlo
import Home from './src/assets/pages/Home.tsx' 
import Login from './src/assets/pages/Login.tsx' 
import Register from './src/assets/pages/Register.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

const router = createBrowserRouter([
  {
    // 1. Ruta Raíz: Establece Home como la página principal
    path: "/", 
    element: <Home />,
  },
  {
    // 2. Permite acceder a Home también con /home (Opcional, pero soluciona el error anterior)
    path: "/home", 
    element: <Home />,
  },
  
  {
    // 4. Ruta para Iniciar Sesión (Referenciado en Home.tsx)
    path: "/Login",
    // Reemplaza esto con tu componente de Login real cuando lo crees
    element: <Login/>, 
  },
  {
    // 5. Ruta para Registrarse (Referenciado en Home.tsx)
    path: "/register",
    // Reemplaza esto con tu componente de Registro real cuando lo crees
    element: <Register/>, 
  },
  // **BONUS**: Ruta Catch-All (404) para cualquier otra URL no definida
  // {
  //   path: "*",
  //   element: <div>404 - Página no encontrada</div>,
  // },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)