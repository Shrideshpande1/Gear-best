import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import { resolvePath } from "react-router-dom";




const Super_deal = () => {
  const[prod,setProd]=useState([])
  useEffect(()=>{
axios.get(`http://localhost:8000/Super_deal`)
.then((res)=>setProd(res.data))
  },[])
  console.log(prod)

 
  return <>
    <h1 style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}> SUPER DEAL</h1>
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
        <Image style={{width:"170px",height:"170px"}} boxsize="ls" src={item.image}/>
        <Box noOfLines={2}>Title:{item.title}</Box>
        <Text>Price:{item.price}$</Text>
        
      </Box>
      
</GridItem>)}
  </Grid>
  </>;
};

export default Super_deal;
