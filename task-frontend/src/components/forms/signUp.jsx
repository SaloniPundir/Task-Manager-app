import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../Navbar';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("formdata: ", formData)
      const response = await axios.post("http://localhost:8000/api/user/register", formData);

      // const data = response.data;
      // console.log('data:'.data);
      console.log('response:',response);

      if (response.status === 201) {
        alert("Registration successful!");
        window.location.href = "/login"
        
      } else {
        alert("User already exist");
      }

    } catch (error) {
      console.error("Registration failed:", error);
    }
    setFormData({
      username: "",
      email: "",
      password: "",
    })
  };

  return (
    <div className='h-screen bg-gradient-to-r from-black to-slate-900'>
      <Navbar/>
      <div className="flex justify-center items-center mt-20">
        <div className="bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] p-20 rounded-2xl opacity-80 shadow-slate-200 shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className=" text-gray-700 text-lg font-bold mb-2"
              >Name</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-lg font-bold mb-2"
              >
                Create Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Create your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white text-black font-bold py-2 px-8 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
