import React from "react";
import Navbar from "./Navbar";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import Categories_and_slider from "../Links/Categories_and_slider";
import Options_and_slider from "./Options_and_silder";
import AllRoutes from "../Links/AllRoutes";
import Super_deal from "./Super_deal";
import Collction from "./Collction"
import Bottom_img from "./bottom_img";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";




const Home = () => {

  const[prod,setProd]=useState([])
  useEffect(()=>{
axios.get(` http://localhost:8000/posts`)
.then((res)=>setProd(res.data))
  },[])
  console.log(prod)

 
  return <>
 
  <Navbar></Navbar>
  <Categories_and_slider/>
<Options_and_slider/>
{/* <AllRoutes/> */}
<Bottom_img/>
<Collction/>
<Super_deal/>
  <Grid templateColumns={{base:"repeat(5,1fr)"}} Gap={10}>
    {prod.map((item)=><GridItem key={item.id}>
      <Box
     bg="gray.50"
   
     spacing="20"
     p={2}
     textAlign="center"
     
     color="gray.400"
     boxShadow='lg'
     margin={"10px"}
      >
       <NavLink to={"/Pre_Booking"}>
        <Image style={{width:"170px",height:"170px",margin:"auto"}} boxsize="ls" src={item.image}/>
        </NavLink>
        <Box  noOfLines={2} style={{textAlign:"left"}}>Title:{item.title}</Box>
        <Text  style={{textAlign:"left",color:"rgb(243,2,64)"}}>Price:{item.price}$</Text>
      
      </Box>
      
</GridItem>)}
  </Grid>
  <Footer/>
  </>;
};

export default Home;
{/* <NavLink to={"/"}>
<Image   style={{width:"250px"}} src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png' alt='Dan Abramov' />
</NavLink> */}