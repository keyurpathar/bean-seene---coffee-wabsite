import React from 'react'
import './app.css'
import '../src/assets/font/font.css'
import Header from './components/Header'
import Btn from './components/Btn'
import Hero from './pages/Hero'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivateRouter from './components/PrivateRouter'
import Order from './pages/Order'
import Menu from './pages/Menu'
import ScrollToTop from './components/ScrollTop';
import Confirm from './pages/Confirm'


const App = () => {
  return (
    <>

    <ScrollToTop />

      <Routes>
        
        <Route path={'/'} element={<Hero />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/signin'} element={<SignIn />} />

        <Route element={<PrivateRouter />}>
          <Route path={'/order'} element={<Order />} />
          <Route path={'/menu'} element={<Menu />} />
          <Route path={'/confirm'} element={<Confirm />} />
        </Route>


      </Routes>

    </>
  )
}

export default App
