import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-black to-slate-900 text-white'>
    <Navbar/>
      <div className='flex justify-center items-center mt-20'>
        <div className="">
          <h1 className="font-bold text-6xl mb-10">TASK MANAGER</h1>
          <p className="font-semibold text-xl">
            Welcome to Task Manager!<br/>
            Manage and delve into your work in a more organized way...<br/>
           <span className='text-lg font-medium'> Get Start with SignUp</span>
          </p>
          <div className='text-center mt-10 '>
          <button className='border-white border-2 rounded-2xl px-4 py-2 cursor-pointer animate-pulse  shadow-white shadow-inner font-medium text-lg text-purple-500'>
          <Link className="" to="/signUp">
            Get Started
          </Link>
          </button>
          <Link to='/login'><p className='mt-4'>Already registered? <span className='text-purple-400 hover:underline'><i> Login Here</i></span></p></Link>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home
