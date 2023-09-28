import { useState } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'


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
          path:'/about',
          element:<About></About>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
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
