import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Buying from './components/Buying'
import Selling from './components/Selling'
import Renting from './components/Renting'
import Home from './components/Home'
import AboutUs from './components/AboutUs'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='buying' element={<Buying/>}/>
      <Route path='selling' element={<Selling/>}/>
      <Route path='renting' element={<Renting />}/>
      <Route path='aboutUs' element={<AboutUs/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)