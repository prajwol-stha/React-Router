import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {gitHubInfoLoader}from './components/Github/Github.jsx'
import Prajwol from './components/User/Prajwol.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// method 2
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}>
        <Route path='prajwol' element={<Prajwol/>}/> 
        {/* http://localhost:5173/about/prajwol */}
      </Route>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={gitHubInfoLoader}
      path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
