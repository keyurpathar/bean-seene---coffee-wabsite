import React from 'react'


const PronsCard = ({ img, name, info }) => {
    return (
        <>
            <div className='border border-amber-200 w-60 text-center h-62 rounded-2xl bg-[#f9c06a59]'>
                <div className='flex justify-center mb-5' id="card-img">
                    <img className=' w-18 pt-5' src={img} alt="An icon svg" />
                </div>
                <div className='text-center pt-2'>
                    <h4 className='text-2xl font-semibold text-amber-900 mb-4 play'>{name}</h4>
                    
                    <h4 className='text-lg text-gray-700 px-6 font-medium play'>{info}</h4>
                </div>


            </div>
        </>
    )
}

export default PronsCard
