import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";



const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2'>
            <div className='space-y-8'>
                <h2  data-aos="zoom-in" className='text-5xl'>Get in touch</h2>
                <p className='text-gray-400 text-[18px] pt-2'>
                    Drop me a line,give me a call and send me a message
                    <br />
                    by submitting the form.
                </p>
                <div className='flex gap-3 items-center'>
                    <AiOutlineMail size={30}/> nimratariq2106@gmail.com
                </div>
                <div className='flex gap-3 items-center'>
                    <BsTelephone size={30}/> 0370 3144900
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-gray-400'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-gray-400'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="messgae">Message</label>
                    <textarea 
                    className='bg-transparent border border-gray-400'
                    id='message' rows={8}>
                     </textarea>   
                </div>
                <button className='bg-slate-700 p-2 px-6'>Sent</button>
                </div>
            </div>
        </div>
   
  )
}

export default Contact
