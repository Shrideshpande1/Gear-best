import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../components/home";
import Super_deal from "../components/SuperDeals/SuperDeal";
import App_Only from "../components/SuperDeals/AppOnly";


// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Super_deal" element={<Super_deal/>}></Route>
      <Route path="/App_Only" element={<App_Only/>}></Route>
    </Routes>
  </div>;
};

export default AllRoutes;
