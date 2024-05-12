import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialUser = {email:"", password:"", username:""};
const Register = () => {

  const [user, setUser] = useState(initialUser);

  const handleUserChange = ({target}) => {
    const {name,value} = target
    setUser((currentUser)=>({
      ...currentUser,
      [name]:value,
    }));
  };

  const handleSubmit = async() => {
    try {
      const url =`http://localhost:1337/api/auth/local/register`;
      if(user.email && user.password && user.username){
        const res = await axios.post(url,user);
        if(res){
          setUser(initialUser);
          navigate('/login');
        }
        console.log(res);
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl mb-4 text-black"><FontAwesomeIcon icon={faUser} /> Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
              Username:
            </label>
            <input
              placeholder='Your Name ...'
              type="text"
              id="name"
              name='username'
              value={user.username}
              onChange={handleUserChange}
              required
              className=" text-black w-full px-3 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              placeholder='Email ex-admin@gmail.com'
              type="email"
              id="email"
              name='email'
              value={user.email}
              onChange={handleUserChange}
              required
              className="text-black w-full px-3 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              placeholder='Provide a Password'
              type="password"
              id="password"
              name='password'
              value={user.password}
              onChange={handleUserChange}
              required
              className="text-black w-full px-3 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
