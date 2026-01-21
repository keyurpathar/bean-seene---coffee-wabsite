// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Btn from './Btn'

// const HeaderCom = () => {
//     const navigate = useNavigate()
//     return (

//         <>

//             <header
//                 className='flex justify-between w-full h-20 items-center bg-amber-800 wrap-normal relative z-10
//         px-9  text-white'>

//                 <div className='logo'>
//                     <h1 className='text-3xl click'><Link to={'/'}>Bean Scene</Link></h1>
//                 </div>

//                 <div className='flex gap-16'>
//                     <Link to="/" className='text-sm play'>Home</Link>
//                     <Link to="/menu" className='text-sm play'>Menu</Link>
//                     <Link to="/about" className='text-sm play'>About us</Link>
//                     <Link to="/contact" className='text-sm play'>Contact us</Link>
//                 </div>

//                 <div className='flex gap-10'>
//                     <Btn
//                         className='bg-[#ffa621f1] cursor-pointer play text-base px-6 py-2 rounded-4xl transition-all text-black duration-500 hover:bg-[#c48930e8] hover:text-white '
//                         name={'Sign Up'}
//                         onClick={() => { navigate('/signup') }}
//                     />
//                     <Btn
//                         name={'Sign In'}
//                         className='bg-[#ffa621f1] cursor-pointer play text-base px-6 py-2 rounded-4xl transition-all text-black duration-500 hover:bg-[#c48930e8] hover:text-white '
//                         onClick={() => { navigate('/signin') }} />
//                 </div>

//             </header>

            
//         </>
//     )
// }

// export default HeaderCom


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Btn from './Btn'

const HeaderCom = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-amber-800 text-white relative z-10">
      {/* TOP BAR */}
      <div className="flex justify-between items-center h-20 px-6 sm:px-9">
        {/* LOGO */}
        <h1 className="text-2xl sm:text-3xl click">
          <Link to="/">Bean Scene</Link>
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-12">
          <Link to="/" className="text-sm play">Home</Link>
          <Link to="/menu" className="text-sm play">Menu</Link>
          <Link to="/about" className="text-sm play">About us</Link>
          <Link to="/contact" className="text-sm play">Contact us</Link>
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex gap-6">
          <Btn
            name="Sign Up"
            onClick={() => navigate('/signup')}
            className="bg-[#ffa621f1] play px-6 py-2 rounded-4xl text-black hover:bg-[#c48930e8] hover:text-white"
          />
          <Btn
            name="Sign In"
            onClick={() => navigate('/signin')}
            className="bg-[#ffa621f1] play px-6 py-2 rounded-4xl text-black hover:bg-[#c48930e8] hover:text-white"
          />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-amber-900 px-6 py-6 flex flex-col gap-4">
          <Link onClick={() => setOpen(false)} to="/" className="play">Home</Link>
          <Link onClick={() => setOpen(false)} to="/menu" className="play">Menu</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="play">About us</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="play">Contact us</Link>

          <div className="flex flex-col gap-3 mt-4">
            <Btn
              name="Sign Up"
              onClick={() => navigate('/signup')}
              className="bg-[#ffa621f1] play px-6 py-2 rounded-4xl text-black"
            />
            <Btn
              name="Sign In"
              onClick={() => navigate('/signin')}
              className="bg-[#ffa621f1] play px-6 py-2 rounded-4xl text-black"
            />
          </div>
        </div>
      )}
    </header>
  )
}

export default HeaderCom
