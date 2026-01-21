import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {

  function handleSubmit(e){
        e.preventDefault()
  }


  return (
    <>

      <div className='h-70 text-center py-10 ' id="footer-1">
        
        <h2 className='text-6xl mb-6 font-semibold text-white play'>Subscribe to get the Latest News</h2>
        <p className='text-xl text-white play'>Don’t miss out on our latest news, updates, tips and special offers</p>
        <div className='mt-6' id="email-btn-sec">
          <form onClick={handleSubmit}>

          <input className=' rounded-tr-0 rounded-tl cursor-pointer rounded-bl w-140 px-2 bg-gray-300 h-10' placeholder='Enter your E-mail' type="email" name="" id="" required />
          <button className='border-l-0 rounded-tl-0 rounded-tr rounded-br font-semibold cursor-pointer w-30 px-2 bg-amber-600 play h-10' type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className='h-100 px-9 py-2 flex justify-between items-center' id="footer-2">

        <div className='px-9 py-8 w-110 ' id="sub-footer-1">
          <p className='text-5xl text-white mb-6 click'>Bean Scene</p>
          <p className='text-xl text-white play'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facere, neque unde eius facilis id explicabo voluptate et obcaecati dicta?</p>
          <div className='flex justify-between w-50 my-6' id="footer-icons">
            <FaInstagram className='text-3xl text-white cursor-pointer' />
            <FaFacebook className='text-3xl text-white cursor-pointer' />
            <FaTwitter className='text-3xl text-white cursor-pointer' /> 
            <FaYoutube className='text-3xl text-white cursor-pointer' />
          </div>
        </div>

        <div className='px-9 py-8 w-210  flex justify-between ' id="sub-footer-2">

          <div>
            <ul>
              <li><a href="#"  className='text-3xl text-white play font-semibold mb-6 inline-block'>About</a></li>
              <li><a href="#" className='text-lg play font-medium text-white mb-4 inline-block' >Menu</a></li>
              <li><a href="#" className='text-lg play font-medium text-white mb-4 inline-block'>Features</a></li>
              <li><a href="#" className='text-lg play font-medium text-white mb-4 inline-block'>Newz & Blogs</a></li>
              <li><a href="#" className='text-lg play font-medium text-white mb-4 inline-block'>Help & Supports</a></li>
            </ul>
          </div>

          <div>
            <ul>
              <li><a href="" className='text-3xl text-white play font-semibold mb-6 inline-block'>Company</a></li>
              <li><a href="" className='text-lg play font-medium text-white mb-4 inline-block'>How we work</a></li>
              <li><a href="" className='text-lg play font-medium text-white mb-4 inline-block'>Tearm & services</a></li>
              <li><a href="" className='text-lg play font-medium text-white mb-4 inline-block'>Pricing</a></li>
              <li><a href="" className='text-lg play font-medium text-white mb-4 inline-block'>FAQs</a></li>
            </ul>
          </div>

          <div>
            <ul>
              <li><a href="#" className='text-3xl mb-6 inline-block text-white play font-semibold'>Contact Us</a></li>
              <li className='text-lg play font-medium text-white mb-4 inline-block'>Akshya Nagar 1st Block 1st Cross, <br />Rammurthy nagar, Bangalore-560016</li>
              <li><a href="#" className='text-lg play font-medium text-white mb-4 inline-block'>+1 202-918-2132</a></li>
              <li><a href="#" className='text-lg play font-medium text-white mb-4 inline-block'>beanscene@mail.com</a></li>
              <li><a href="#" className='text-lg play font-medium text-white mb-4 inline-block'>www.beanscene.com</a></li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer


// import React from 'react'
// import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"

// const Footer = () => {

//   const handleSubmit = (e) => {
//     e.preventDefault()
//   }

//   return (
//     <>
//       {/* SUBSCRIBE SECTION */}
//       <div className="text-center py-12 px-6 sm:px-9 bg-amber-900">
//         <h2 className="text-3xl sm:text-5xl mb-6 font-semibold text-white play">
//           Subscribe to get the Latest News
//         </h2>
//         <p className="text-sm sm:text-lg text-white play mb-8">
//           Don’t miss out on our latest news, updates, tips and special offers
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto"
//         >
//           <input
//             type="email"
//             required
//             placeholder="Enter your E-mail"
//             className="w-full sm:flex-1 h-11 px-4 rounded-lg sm:rounded-r-none bg-gray-200 outline-none"
//           />
//           <button
//             type="submit"
//             className="w-full sm:w-auto h-11 px-6 bg-amber-600 play font-semibold text-white rounded-lg sm:rounded-l-none hover:bg-amber-700 transition"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>

//       {/* MAIN FOOTER */}
//       <div className="bg-amber-800 px-6 sm:px-9 py-14 text-white">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

//           {/* BRAND */}
//           <div>
//             <p className="text-4xl mb-6 click">Bean Scene</p>
//             <p className="text-sm sm:text-base play mb-6">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Dolor facere, neque unde eius facilis id explicabo.
//             </p>

//             <div className="flex gap-6">
//               <FaInstagram className="text-2xl cursor-pointer" />
//               <FaFacebook className="text-2xl cursor-pointer" />
//               <FaTwitter className="text-2xl cursor-pointer" />
//               <FaYoutube className="text-2xl cursor-pointer" />
//             </div>
//           </div>

//           {/* ABOUT */}
//           <div>
//             <h4 className="text-2xl font-semibold mb-6 play">About</h4>
//             <ul className="space-y-3 text-sm sm:text-base play">
//               <li>Menu</li>
//               <li>Features</li>
//               <li>News & Blogs</li>
//               <li>Help & Support</li>
//             </ul>
//           </div>

//           {/* COMPANY */}
//           <div>
//             <h4 className="text-2xl font-semibold mb-6 play">Company</h4>
//             <ul className="space-y-3 text-sm sm:text-base play">
//               <li>How we work</li>
//               <li>Terms & Services</li>
//               <li>Pricing</li>
//               <li>FAQs</li>
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h4 className="text-2xl font-semibold mb-6 play">Contact Us</h4>
//             <ul className="space-y-3 text-sm sm:text-base play">
//               <li>
//                 Akshya Nagar 1st Block 1st Cross,<br />
//                 Ramamurthy Nagar, Bangalore-560016
//               </li>
//               <li>+1 202-918-2132</li>
//               <li>beanscene@mail.com</li>
//               <li>www.beanscene.com</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default Footer
