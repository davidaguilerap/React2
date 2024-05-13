/* eslint-disable react/prop-types */
import { Suspense, lazy } from 'react'
import { Router } from './Routers.jsx'
import {HomePage} from './pages/HomePage.jsx'
// import {About} from './pages/About.jsx'
import './App.css'
import { Page404 } from './pages/404'
import { SearchPage } from './pages/SearchPage'
import {Route} from './Route.jsx'

//pushstate es lo que recoge cuando avanzamos en la navegacion


// const routes = [
//   {
//     path:'/',
//     Component: HomePage
//   },
//   {
//     path:'/about',
//     Component: About
//   },
//   {
//     path:'/search/:query',
//     Component: SearchPage
//   }
// ]

//para usar el lazy en este caso tienes que poner la funcion q exporta como default
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

function App() {
  
  return (
    <main>
      
      <Suspense fallback={<div><h1>Carga...</h1></div>}>
         <Router defaultComponent={Page404}>
          <Route path='/' Component={HomePage}></Route>
          <LazyAboutPage></LazyAboutPage>
          <Route path='/:lang/about' Component={LazyAboutPage}>
          </Route>
          <Route path='/search/:query' Component={SearchPage}></Route>
        </Router> 
      </Suspense>
    </main>
  )
}

export default App
