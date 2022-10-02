import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Grid, Box, GridItem, Image, Text, Button } from "@chakra-ui/react";
import Categories_and_slider from "../Links/Categories_and_slider";
import Options_and_slider from "./Options_and_silder";
import AllRoutes from "../Links/AllRoutes";
import Super_deal from "./Super_deal";
import Collction from "./Collction";
import Bottom_img from "./bottom_img";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import Counter from "../Booking/counter";

const Cart = () => {
  return (
    <>
      <Navbar></Navbar>
      <Categories_and_slider />
      <></>

      <Box border={"2px solid black"} height={"200px"} >
        <h1>GGSHM Store</h1>
        <Divider width={"98%"} margin={"auto"} marginBottom={"20px"}></Divider>
        <Box display={"flex"}
        justifyContent={"space-around"}>
          <Box >
            <Image
              height={"100px"}
             
              src=" https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16457/goods_img_big-v1/329d1df7db28.jpg"
              alt="Dan Abramov"
            />
          </Box>

          <Box width={"400px"}
          textAlign={"left"}
        
          >
            Smart Watch Men Full Touch Screen Sport Fitness Watch IP67
            Waterproof Bluetooth For Android ios smartwatch Men+box - Black
          </Box>

          <Box fontWeight={"bold"}
         >$29.99</Box>
          <Box >
            <Counter />
          </Box>
          <Box>
          <NavLink to={"/Booking"}>
            <button border={"1px solid black"}>Buy</button>
            </NavLink>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Cart;
{
  /* <NavLink to={"/"}>
<Image   style={{width:"250px"}} src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png' alt='Dan Abramov' />
</NavLink> */
}
