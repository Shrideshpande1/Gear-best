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
   
      spacing="10"
      p={2}
      textAlign="center"
      rounded="lg"
      color="gray.400"
      >
        <Image style={{width:"220px",height:"200px"}} boxsize="ls" src={item.image}/>
        <Text>Title:{item.title}</Text>
        <Text>Price:{item.price}$</Text>
        <Button colorScheme='blue'>Cart</Button>
      </Box>
      
</GridItem>)}
  </Grid>
  <Footer/>
  </>;
};

export default Home;
