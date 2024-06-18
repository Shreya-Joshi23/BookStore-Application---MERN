import React from "react";
import {Navigate,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./home/Home";
// import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ShopContextProvider from './context/ShopContext'
import Cart from "./components/Cart/Cart";

const App = () => {

  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <ShopContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/cart" element={authUser?<Cart />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </ShopContextProvider>
      <Toaster />
    </div>
  );
};

export default App;
