import Login from './pages/login'
import './App.css'
import { BrowserRouter,Links,Link, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import ProductList from './components/Product/ProductList'
import ViewPoduct from './components/Product/ViewPoduct'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/view/:id' element={<ViewPoduct/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App