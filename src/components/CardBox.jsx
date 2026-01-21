import React from 'react'
import coffee1 from '../assets/images/coffee-1.jpg'
import coffee2 from '../assets/images/coffee-2.jpg'
import coffee3 from '../assets/images/coffee-3.jpg'
import coffee4 from '../assets/images/coffee-4.jpg'
import Btn from './Btn'

const CardBox = ({img , name , assets , sugar , price , onClick}) => {
  return (
    <div className='flex justify-center items-center my-6 '>

    <div className='border border-amber-300 w-190 rounded-2xl p-2 flex items-center gap-6'>

      <div id="left-cardbox">
            <img src={img} className=' rounded-2xl object-cover' alt="" />
      </div>

      <div id="right-cardbox" className='flex flex-col gap-3'>

        <div className='flex gap-3'>
            <p className='text-2xl font-semibold play'>Name : </p>
            <p className='text-2xl font-semibold play'>{name}</p>
        </div>

        <div className='flex gap-3'>
                <p className='text-2xl font-semibold play'>Assets : </p>
                <p className='text-2xl font-semibold play'>{assets}</p>
        </div>

        <div className='flex gap-3'>
                <p className='text-2xl font-semibold play'>Has Sugar : </p>
                <p className='text-2xl font-semibold play'>{sugar}</p>
        </div>

        <div className='flex gap-3'>
            <p className='text-2xl font-semibold play'>Price :</p>
            <p className='text-3xl text-green-600 font-semibold play'>{price}</p>
        </div>

        <div className='flex gap-3'>
            <Btn className='bg-[#ffa621f1] cursor-pointer play text-base px-8 py-2 rounded-4xl transition-all text-black duration-500 hover:bg-[#c48930e8] hover:text-white ' onClick={onClick} name={'Order Now'}  />
        </div>



      </div>
    </div>
    </div>
  )
}

export default CardBox
