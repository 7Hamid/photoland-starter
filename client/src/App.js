import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Search from "./pages/Search";
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/about';
import Partners from './pages/partners';
import Welcome from './pages/welcome';

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from './pages/contact';
import NotFound from './pages/NotFound';

//layout
const Layout=()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

//routes
const router=createBrowserRouter([
  {
    element:<Layout />,
    children:[
      {path:'/', element:<Home />},
      {path:'/products/:id', element:<Products />},
      {path:'/product/:id', element:<ProductDetails />},
      {path:'/search', element:<Search />},
      {path:'/login', element:<Login />},
      {path:'/register', element:<Register />},
      {path:'/about', element:<About />},
      {path:'/partners', element:<Partners />},
      {path:'/welcome', element:<Welcome />},
      {path:'/contact', element:<Contact/>},
      {path:'*', element:<NotFound/>},
    ],
  },
]);


//main app
const App = () => {
  return <div>
    <RouterProvider router={router} />
    <ToastContainer />
  </div>;
};

export default App;
