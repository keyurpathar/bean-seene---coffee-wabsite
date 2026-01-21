import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import HeaderCom from '../components/HeaderCom'
import CardBox from '../components/CardBox'
import Footer from '../components/Footer'
import coffee1 from '../assets/images/coffee-1.jpg'
import coffee2 from '../assets/images/coffee-2.jpg'
import coffee3 from '../assets/images/coffee-3.jpg'
import coffee4 from '../assets/images/coffee-4.jpg'
import { Navigate, useNavigate } from 'react-router-dom'

const Menu = () => {

  let navigate = useNavigate()
  return (
    <>


      <div className=''>

        <HeaderCom />
        
    <h1 className='text-5xl underline text-center my-3 play'>Menu</h1>

        <div className='px-9 my-8'>
          <CardBox img={coffee1}  name={'Cappuccino'} assets={'Coffee 50% | Milk 50%'} sugar={'No'} price={'250/-'} onClick={() => { navigate('/confirm') }} />
          <CardBox img={coffee2} name={'Chai Latte'} assets={'Coffee 50% | Milk 50%'} sugar={'Yes'} price={'280/-'} />
          <CardBox img={coffee3} name={'Macchiato'} assets={'Coffee 50% | Hot Chocolate 50%'} sugar={'Yes'} price={'350/-'} />
          <CardBox img={coffee4} name={'Espresso'} assets={'Coffee 50% | Milk 50%'} sugar={'No'} price={'299/-'} />
        </div>

        <Footer />

      </div>

    </>
  )
}

export default Menu
