
import React from "react";
import Navbar from "../Navbar";

import Collection from "../Collction";
import Categories_and_slider from "../../Links/Categories_and_slider";
import { useState } from "react";
import { useEffect } from "react"
import axios from "axios"
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import Footer from "../Footer";
function App_Only(){
    const[prod,setProd]=useState([])
    useEffect(()=>{
  axios.get(` http://localhost:8000/posts`)
  .then((res)=>setProd(res.data))
    },[])
    console.log(prod)
  
    return (
        <>
        <Navbar/>
        <Categories_and_slider/>
       

        <Grid templateColumns={{base:"repeat(5,1fr)"}} Gap={"20px"}>
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
        <Image style={{width:"150px",height:"150px"}} boxsize="ls" src={item.image}/>
        <Box noOfLines={2}>Title:{item.title}</Box>
        <Text>Price:{item.price}$</Text>
        <Button colorScheme='blue'>Cart</Button>
      </Box>
      
</GridItem>)}
  </Grid>
  <Footer/>
        </>
    )
}
export default App_Only