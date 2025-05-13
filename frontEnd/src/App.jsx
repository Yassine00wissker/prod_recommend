import Login from './pages/login'
import './App.css'
import { BrowserRouter,Links,Link, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import ProductList from './pages/ProductList'
import ViewPoduct from './pages/ViewPoduct'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProductList/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/view/:id' element={<ViewPoduct/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App