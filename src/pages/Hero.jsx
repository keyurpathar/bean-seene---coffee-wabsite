import React from 'react'
import '../App.css'
import Btn from '../components/Btn'
import disc from '../assets/images/coffee-cup.jpg'
import Card from '../components/Card'
import coffee1 from '../assets/images/coffee-1.jpg'
import coffee2 from '../assets/images/coffee-2.jpg'
import coffee3 from '../assets/images/coffee-3.jpg'
import coffee4 from '../assets/images/coffee-4.jpg'
import PronsCard from '../components/PronsCard'
import icon1 from '../assets/images/icon-1.svg'
import icon2 from '../assets/images/icon-2.svg'
import icon3 from '../assets/images/icon-3.svg'
import icon4 from '../assets/images/icon-4.svg'
import coffeebeans from '../assets/images/coffee_bean.png'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
// import { FaInstagram } from "react-icons/fa6";
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'


const Hero = () => {

  const navigate = useNavigate()
  return (

    <>
      <div className='h-screen w-full' id='hero'>

        <div className='relative h-full '>
          <div className='absolute w-full h-screen' id='bg-layout'>


            <Header />

            <main className='px-9 my-12'>

              <div className='text-left text-white ' id="main-div">

                <p className='text-xl mb-4 font-semibold play'>We’ve got your morning covered with</p>

                <h1 className='text-[150px] mb-6 click'>Coffee</h1>

                <p className='mb-10 play'>It is best to start your day with a cup of coffee. Discover the <br />
                  best flavours coffee you will ever have. We provide the best <br />
                  for our customers.</p>

                <Btn onClick={() => {navigate('/menu')}}  className='bg-[#ffa621f1] cursor-pointer play text-base px-8 py-4 rounded-4xl transition-all text-black duration-500 hover:bg-[#c48930e8] hover:text-white ' name={'Order Now'} />



              </div>




            </main>

          </div>
        </div>

      </div>

      <div className='flex justify-center items-center w-full px-9 py-8' id=" discover-sec">

        <div className="w-[50%] flex flex-col gap-10 left-discover">
          <h2 className='text-amber-900 text-6xl play'>Discover the best coffee</h2>
          <p className='play'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
          <Btn name={'Learn more'} className={'bg-[#F9C06A] px-6 py-3 rounded-4xl text-sm cursor-pointer transition-all w-31 duration-500 play hover:bg-[#ff9f0fc4] '} />
        </div>
        <div className="w-[40%] right-discover">
          <img src={disc} alt="An coffee cup img" className='w-full object-cover' />
        </div>

      </div>

      <div className='px-9 py-8  mx-10 ' id='coffee-sec'>
        <h2 className='text-6xl text-center text-amber-800 font-extrabold mb-8 play '>Enjoy a new blend of coffee style</h2>
        <p className='text-2xl text-center mb-8 play'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        <div className='px-6 flex justify-between items-center'>
          <Card img={coffee1} item={'Cappuccino'} ing={'Coffee 50% | Milk 50%'} price={'250/-'} onClick={() => {navigate('/menu')}} />
          <Card img={coffee2} item={'Chai Latte'} ing={'Coffee 50% | Milk 50%'} price={'280/-'} onClick={() => {navigate('/menu')}} />
          <Card img={coffee3} item={'Macchiato'} ing={'Coffee 50% | Hot Chocolate 50%'} price={'350/-'} onClick={() => {navigate('/menu')}} />
          <Card img={coffee4} item={'Espresso'} ing={'Chocolate 50% | Milk 50%'} price={'299/-'} onClick={() => {navigate('/menu')}} />
        </div>
      </div>

      <div className='px-9 py-8 my-10 mx-10 ' id=" prons-sec">
        <h2 className='text-6xl text-center text-amber-800 font-extrabold mb-8 play '>Why are we different?</h2>
        <p className='text-2xl text-center mb-8 play'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        <div className='px-6 flex justify-between'>
          <PronsCard img={icon1} name={'Supreme Beans'} info="Beans that provides great taste" />
          <PronsCard img={icon2} name={'High Quality'} info="We provide the highest quality" />
          <PronsCard img={icon3} name={'Extraordinary'} info="Coffee like you have never tasted" />
          <PronsCard img={icon4} name={'Affordable Price'} info="Our Coffee prices are easy to afford" />
        </div>
      </div>

      <div className='text-center  h-40 mb-10' id="join-sec">
        <p className='text-xl text-gray-600 mb-4 play'>Great ideas start with great coffee, Lets help you achieve that</p>
        <h3 className='text-3xl font-semibold text-amber-900 mb-4  play'>Get started today.</h3>
        <div className='mt-10'>
          <Btn className={'bg-[#F9C06A] px-6 py-3 rounded-4xl text-sm cursor-pointer transition-all w-31 duration-500 play hover:bg-[#c98c32] hover:text-white '} name={'Join Us'} />
        </div>
      </div>

      <div className='h-140 w-full flex justify-between items-center' id="chance-sec">

        <div className='pl-12' id="left-chance">
          <h2 className='text-white text-6xl mb-8 font-semibold play'>Get a chance to have an <br /> Amazing morning</h2>
          <p className='text-lg mb-10 text-white play'>We are giving you are one time opportunity to <br />experience a better life with cffee.</p>
          <Btn onClick={() => {navigate('/menu')}} className={'bg-[#F9C06A]  px-6 py-3 rounded-4xl text-sm cursor-pointer transition-all w-31 duration-500 play hover:bg-[#c98c32] hover:text-white '} name={'Order Now'} />
        </div>

        <div id="right-chance">
          <img className='w-130' src={coffeebeans} alt="" />
        </div>

      </div>

      <div className='my-8 px-9 py-8' id="slider-sec">
        <h2 className='text-4xl font-semibold text-amber-800 text-center mb-6 play'>Our coffee perfection feedback</h2>
        <p className='text-lg text-center text-gray-600 play'>Our customers has amazing things to say about us</p>

        <div className="px-10 slides">
          <Slider />
        </div>


      </div>

      <div id="footer">
        <Footer />
      </div>


    </>
  )
}

export default Hero
