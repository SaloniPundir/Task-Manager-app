import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-evenly items-center  bg-gradient-to-r from-black to-slate-900 text-white px-10 py-8 shadow-slate-300 shadow-md rounded-lg'>
            <Link to='/'><h1 className='font-bold text-2xl text-purple-400'>TASK MANAGER</h1></Link>
            <div className='flex justify-center items-center gap-16 font-medium text-lg'>
                <Link to='/login'><p>Login</p></Link>
                <Link to='/signUp'><p>SignUp</p></Link>
            </div>
        </div>
    )
}

export default Navbar;
