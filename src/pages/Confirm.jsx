import React from 'react'
import Footer from '../components/Footer'
import HeaderCom from '../components/HeaderCom'
import video from '../assets/images/order.mp4'


const Confirm = () => {
  return (
    <>
      <HeaderCom />
      <div className='flex justify-center'>
        <video className='w-100'   src={video} autoPlay ></video>
      </div>
      <Footer/>
    </>
  )
}

export default Confirm
