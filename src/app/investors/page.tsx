'use client'
import React from 'react'
import TextForm from '../components/formElements/TextForm'
import axios from 'axios'

function page() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    };
    
    e.preventDefault()
    const email = (document.getElementById('email_input') as HTMLInputElement).value
    const password = (document.getElementById('password_input') as HTMLInputElement).value
    const response = await axios.post('http://localhost:8080/api/test')
    console.log(response)
  }

  return (
    <div className='bg-[#1E2A5E] h-screen p-4'>
      <form onSubmit={handleSubmit} className='w-fit flex flex-col gap-2'>
        <TextForm name='email_input' component_id='email_input' placeholder='Email' isPassword={false}/>
        <TextForm name='password_input' component_id='password_input' placeholder='Password' isPassword={true} />
        <button type='submit' className='bg-[#F9A826] px-4 m-auto rounded-sm text-bold text-3xl w-fit'>&rarr;</button>
      </form>
    </div>
  )
}

export default page