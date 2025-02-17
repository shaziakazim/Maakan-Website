import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AllRoutes } from './Routes/index.jsx'
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
const router=createBrowserRouter(createRoutesFromElements(AllRoutes))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
