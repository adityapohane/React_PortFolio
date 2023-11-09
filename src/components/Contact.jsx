import React from 'react'

const Contact = () => {
  return (
      <div name="contact" className='w-full h-screen bg-black flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/8383ecdd-b89b-43aa-8fd3-d66b3b7c4f5e" className='max-w-[600px] p-4 flex flex-col justify-center w-full h-full'>
              <div className='pb-4'>
                  <p className='text-4xl font-bold inline border-b-4 border-cyan-600 text-gray-300'>Contact</p>
                  <p className='text-cyan-300 p-4 '>// Submit the Form Below or Contact me through my email - <span className='text-white font-bold '>adityapohane9897@gmail.com</span></p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name='email' />
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='hover:bg-white hover:text-black border-2 border-white text-white px-4 py-3 my-8 mx-auto flex items-center'>Connect</button>
              </form>
              
    </div>
  )
}

export default Contact