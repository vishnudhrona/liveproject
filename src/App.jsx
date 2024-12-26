
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './loginpage/Login'
import Landingpage from './landingpage/Landingpage'
import Productpage from './productpage/Productpage'
import Addproductpage from './addproductpage/Addproductpage'
import Weatherdetails from './Weather/Weatherdetails'
import Weatherpage from './weatherpage/Weatherpage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/landingpage' element={<Landingpage />} />
      <Route path='/productpage' element={<Productpage />} />
      <Route path='/addproduct' element={<Addproductpage />} />
      <Route path='/weather' element={<Weatherpage />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
