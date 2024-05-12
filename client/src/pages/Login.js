import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialUser = {password:"", email:""};

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(initialUser);

  const handleChange = ({target}) => {
    const {name,value} = target
    setUser((currentUser)=>({
      ...currentUser,
      [name]:value,
    }));
  };

  const handleSubmit = async() => {
    const url =`http://localhost:1337/api/auth/local`;
    try {
      if(user.email && user.password){
        const {data} = await axios.post(url,user);
        if(data.jwt){
          toast.success('logged in successfully', {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate('/');
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl mb-4 text-black"><FontAwesomeIcon icon={faSignInAlt} /> Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              placeholder='Your Email'
              type="email"
              name='email'
              id="email"
              value={user.email}
              onChange={handleChange}
              required
              className="text-black w-full px-3 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              placeholder='Your Password'
              type="password"
              name='password'
              id="password"
              value={user.password}
              onChange={handleChange}
              required
              className="text-black w-full px-3 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            {/* <Link to={'/welcome'}>Login</Link> */}
            Login
          </button>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account yet?{' '}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
