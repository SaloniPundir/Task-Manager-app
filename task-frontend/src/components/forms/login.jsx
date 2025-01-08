import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/user/login", formData);
      const { message } = response.data;

      if (response.status === 200) {
        console.log("Login Successfully!")
        window.location.href = "/task"
      }
      else {
        console.log(message);
        alert("Invalid Credentials!")
      }
    }
    catch (error) {
      console.error('Login error', error);
    }
    setFormData({
      email: '',
      password: '',
    })
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-slate-900">
          <div className="bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] p-20 rounded-2xl opacity-80 shadow-xl ">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-white text-black font-bold py-2 px-8 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-10 text-center">
              <p className="text-md font-medium">
                New user?{" "}
                <a href="/signUp" className="text-blue-500 hover:underline">
                  Create an account
                </a>
              </p>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Login
