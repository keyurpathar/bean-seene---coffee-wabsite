import React from 'react'
import Btn from './Btn'
// import img from '../assets/images/coffee-1.jpg'

const Card = ({img , item , ing , price , onClick}) => {
  return (
    <>
      <div className='border border-amber-200 w-60 h-82 relative rounded-2xl bg-[#f9c06a59]'>
        <div className='' id="card-img">
                <img className='rounded-tl-2xl rounded-tr-2xl' src={img} alt="" />
        </div>
        <div className='text-center pt-2'>
            <h4 className='text-2xl font-semibold text-amber-900 mb-2 play'>{item}</h4>
            <p className='text-sm mb-2 play'>{ing}</p>
            <h4 className='text-2xl font-bold play'>{price}</h4>
        </div>

        <Btn onClick={onClick} className={'bg-[#F9C06A] px-6 py-3 rounded-4xl text-base cursor-pointer transition-all w-32 duration-500 absolute top-76 left-14 play hover:bg-[#ce800a] hover:text-white '} name={'Order Now'} />
      </div>
    </>
  )
}

export default Card
