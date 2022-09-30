import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
// import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import { resolvePath } from "react-router-dom";
import { Grid, GridItem ,Flex} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";

const Links=[
  // {path:"/" ,title:"Home"},
  {path:"/Super_deal" ,title:"Super deal"},
  {path:"/App_Only" ,title:"App Only"},
  {path:"/New_Arrival" ,title:"New Arrival"},
  {path:"/Pre_Booking" ,title:"Pre Booking"},
  {path:"/Login" ,title:"Login"}
]
const Categories_and_slider = () => {
  return <Flex justifyContent={"space-around"}>{Links.map((link)=>(
    <NavLink key={link.path} to={link.path}>
      {link.title}

    </NavLink>
  ))}</Flex>;
};

export default Categories_and_slider;

// function Categories_and_slider(){
//     return(
// <Grid templateColumns='repeat(5, 1fr)' >
//   <GridItem w='100%' h='10' bg='#000000' style={{textAlign:"center", fontSize:"22px",fontWeight:"bold",color:"white"}} >Category</GridItem>
//   <GridItem w='100%' h='10' bg='
// #ffda00' style={{textAlign:"center", fontSize:"22px",fontWeight:"bold",color:"black"}} > SUPER DEALS</GridItem>
//   <GridItem w='100%' h='10' bg='
// #ffda00'style={{textAlign:"center", fontSize:"22px",fontWeight:"bold",color:"black"}} >APP ONLY</GridItem>
//   <GridItem w='100%' h='10' bg='
// #ffda00' style={{textAlign:"center", fontSize:"22px",fontWeight:"bold",color:"black"}}>NEW ARRIVALS</GridItem>
//   <GridItem w='100%' h='10' bg='
// #ffda00' style={{textAlign:"center", fontSize:"22px",fontWeight:"bold",color:"black"}}></GridItem>
 
// </Grid>

//     )
// }
// export default Categories_and_slider;

