import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../components/home";
import Super_deal from "../components/SuperDeals/SuperDeal";
import App_Only from "../components/SuperDeals/AppOnly";
import New_Arrival from "../components/SuperDeals/New_arrival";
import Pre_Booking from "../Booking/prebooking";
import Login from "../components/LogIn";
import Cart from "../components/Cart";
import Booking from "../Booking/Booking";
import SignIn from "../components/SignIn";
// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Super_deal" element={<Super_deal/>}></Route>
      <Route path="/App_Only" element={<App_Only/>}></Route>
      <Route path="/New_Arrival" element={<New_Arrival/>}></Route>
      <Route path="/Pre_Booking" element={<Pre_Booking/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/Booking" element={<Booking/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}></Route>
    </Routes>
  </div>;
};

export default AllRoutes;
