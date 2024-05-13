import {describe,it,expect, beforeEach,vi} from 'vitest'
import {cleanup, fireEvent, render,screen, waitFor} from '@testing-library/react'
import { Router } from './Routers'
import { getCurrentPath } from './util.jsx'
import { Route } from './Route'
import { Link } from './Links'


vi.mock('./util.jsx', ()=>{
  return({
    getCurrentPath: vi.fn()
    
  }
  )

})
// bien al hacer los test tenemos algunos problemas y es que como vamos a probar Router al ser un componente REact
//tenemos que renderizarlo (ver tambien las cosas necesarias para las pruebas en el tepiden.txt)
//usaremos happy-dom y @testing-library/react
describe('Router',()=>{
    beforeEach(()=>{
      cleanup()
      vi.clearAllMocks()
    })

    it('should render whitout problems', ()=>{
      render(<Router routes ={[]}></Router>)
      expect(true).toBeTruthy()

    })

    it('should render 404  if no routes match',()=>{
        render(<Router routes ={[]} defaultComponent={()=><h1>404</h1>}></Router>)
        expect(screen.getAllByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches',()=>{
      getCurrentPath.mockReturnValue('/about')
      const routes =[{
        path:'/about',
        Component:()=> <h1>About</h1>
      },{
        path:'/',
        Component:()=> <h1>Home</h1>
      }
    ]
    render(<Router routes={routes}></Router>)
    expect(screen.getAllByText('About')).toBeTruthy()
    })

    it('should navigate using Links' , async ()=>{
      getCurrentPath.mockReturnValueOnce('/')

      render(
        <Router>
          <Route path='/' Component={()=>{
            return(
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to about</Link>
              </>
            )
          }}> </Route>

          <Route path='/about' Component={()=>{
            return(
                <h1>About</h1>
            )
          }}> </Route>
        </Router>

      )
      const button = screen.getByText(/Go to about/)
      fireEvent.click(button)
      await waitFor(()=> screen.findByText('About'))
    })

})