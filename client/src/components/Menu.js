import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faSignOutAlt, faHome} from '@fortawesome/free-solid-svg-icons';


const Menu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="hover:text-accent-hover">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to={'/'}
                  className="text-white hover:text-yellow-400" href=''>
                  <FontAwesomeIcon icon={faHome} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/about'}
                  className="text-white hover:text-yellow-400" href=''>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/partners'}
                  className="text-white hover:text-yellow-400" href=''>
                  Partners
                </NavLink>
              </li>
              <li className="relative">
                <button
                  className="text-white hover:text-yellow-400 "
                  onClick={toggleDropdown}
                >
                  ACCOUNT
                </button>
                {isOpen && (
                  <ul className="absolute z-10 right-0 mt-2 py-2 w-48 bg-white shadow-lg">
                    <li>
                      <a
                        onClick={()=>navigate('/login')}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        href=""
                      >
                        <pre>Login         <FontAwesomeIcon icon={faSignInAlt} /></pre>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={()=> navigate('/register')}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        href=""
                      >
                        <pre>Register      <FontAwesomeIcon icon={faUser} /></pre>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={()=>navigate('/')}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        href=""
                      >
                        <pre>Logout        <FontAwesomeIcon icon={faSignOutAlt} /></pre>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white"
              onClick={toggleDropdown}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    className="heroicon-ui"
                    d="M20 12H4M20 6H4M20 18H4"
                  />
                ) : (
                  <path
                    className="heroicon-ui"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                href="#about"
              >
                About Us
              </a>
            </li>
            <li>

            <a
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                href="#login"
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                href="#register"
              >
                Register
              </a>
            </li>
            <li>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                href="#logout"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Menu;
