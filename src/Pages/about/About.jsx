import React from 'react'
const About = () => {
  return (
    <>
      <div className='w-[92%] mx-auto border-[12px] border-[#14B8A6] border-opacity-20 p-5 mt-10'>
        <div className='w-full flex justify-center items-center gap-10 border-2 border-dashed border-[#14B8A6] p-5'>
          <div className='w-[50%] h-[350px] overflow-hidden rounded-lg'>
            <img src="./img/call-to-action.jpg" alt="Agent" className='w-full h-full object-cover' />
          </div>
          <div className='w-[50%]'>
            <h1 className='text-5xl text-gray-700 font-bold mb-3'>Contact With Our Certified Agent</h1>
            <p className='text-gray-600'>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
            <div className='flex gap-5 mt-5'>
              <button className='bg-[#14B8A6] text-white px-5 py-3 rounded-lg hover:bg-[#0F766E] transition'>Make A CALL</button>
              <button className='bg-gray-700 px-5 py-3 rounded-lg text-white hover:bg-gray-900 transition'>Get Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
