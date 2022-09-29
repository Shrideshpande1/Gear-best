
import React from "react";
import Navbar from "../Navbar";

import Collection from "../Collction";
import Categories_and_slider from "../../Links/Categories_and_slider";
import { useState } from "react";
import { useEffect } from "react"
import axios from "axios"
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import Footer from "../Footer";

function New_Arrival(){
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
        <Box style={{display:"flex",margin:"auto"}}>
       
  <Image style={{width:"25px",marginLeft:'500px'}} src='data:image/png;base64,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' alt='Dan Abramov' />

            <h1 style={{fontSize:"25px",fontWeight:"bold"}}>NEW FOR TODAY</h1>
        </Box>
        <Box>
            <h1 style={{fontSize:"20px",fontWeight:"bold",textAlign:"left",marginBottom:"10px"}}>LATEST COLLECTION</h1>
        </Box>

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
        </>
    )
}
export default New_Arrival