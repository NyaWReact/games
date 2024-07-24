import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.scss'
import { Layout } from './components/layout/Layout'
import { FindPair } from './components/findPair/FindPair'
import { Gallows } from './components/gallows/Gallows'
import { Menu } from './components/layout/menu/Menu'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Menu/>}/>
        <Route path='findPair' element={<FindPair/>}/>
        <Route path='Gallows' element={<Gallows/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
