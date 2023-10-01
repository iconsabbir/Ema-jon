

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import About from './components/About/About'
import Prodect from './components/prodect/Prodect'



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
         path:'/prodect',
         element:<Prodect></Prodect>,
         loader:()=>fetch('products.json')
         
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/about',
          element: <PrivateRoute><About></About></PrivateRoute>
          
          
        }
      ]
      
    }
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
