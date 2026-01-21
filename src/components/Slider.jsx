

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import img from '../assets/images/man.jpg';

export default function App() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    return (
        <div className="relative">
            
            <button
                ref={prevRef}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 nav-btn prev-btn cursor-pointer text-3xl bg-amber-900 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-amber-800 transition-colors"
            >
                <FaAngleLeft />
            </button>

            <button
                ref={nextRef}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 nav-btn next-btn cursor-pointer text-3xl bg-amber-900 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-amber-800 transition-colors"
            >
                <FaAngleRight />
            </button>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                className="mySwiper"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
            >
                <SwiperSlide>
                    <div className='px-10 mx-10'>
                        <p className='text-9xl relative top-8 text-amber-900'><RiDoubleQuotesL /></p>
                        <div className="relative grid place-items-center gap-4 slide-content text-center bg-amber-100 border border-amber-200 rounded-2xl h-90 w-260 py-8">
                            <p className='px-10 mx-10 text-gray-700 text-lg  play'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut blanditiis fuga consequatur ipsum quisquam amet sapiente saepe eius dolor sequi?Lorem ipsum dolor sit amet. </p>
                            <h4 className='text-3xl font-semibold play text-amber-800'>Dom Torreto</h4>
                            <h5 className='font-semibold play'>Project Leader</h5>
                            <img className='w-50 rounded-4xl' src={img} alt="An image of reviwer" />
                        </div>
                        <p className='text-9xl relative -top-8.5 left-230 text-amber-900'><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='px-10 mx-10'>
                        <p className='text-9xl relative top-8 text-amber-900'><RiDoubleQuotesL /></p>
                        <div className="relative grid place-items-center gap-4 slide-content text-center bg-amber-100 border border-amber-200 rounded-2xl h-90 w-260 py-8">
                            <p className='px-10 mx-10 text-gray-700 text-lg  play'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut blanditiis fuga consequatur ipsum quisquam amet sapiente saepe eius dolor sequi?Lorem ipsum dolor sit amet. </p>
                            <h4 className='text-3xl font-semibold play text-amber-800'>Dom Torreto</h4>
                            <h5 className='font-semibold play'>Project Leader</h5>
                            <img className='w-50 rounded-4xl' src={img} alt="An image of reviwer" />
                        </div>
                        <p className='text-9xl relative -top-8.5 left-230 text-amber-900'><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='px-10 mx-10'>
                        <p className='text-9xl relative top-8 text-amber-900'><RiDoubleQuotesL /></p>
                        <div className="relative grid place-items-center gap-4 slide-content text-center bg-amber-100 border border-amber-200 rounded-2xl h-90 w-260 py-8">
                            <p className='px-10 mx-10 text-gray-700 text-lg  play'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut blanditiis fuga consequatur ipsum quisquam amet sapiente saepe eius dolor sequi?Lorem ipsum dolor sit amet. </p>
                            <h4 className='text-3xl font-semibold play text-amber-800'>Dom Torreto</h4>
                            <h5 className='font-semibold play'>Project Leader</h5>
                            <img className='w-50 rounded-4xl' src={img} alt="An image of reviwer" />
                        </div>
                        <p className='text-9xl relative -top-8.5 left-230 text-amber-900'><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}