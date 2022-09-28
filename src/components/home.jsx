import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import { resolvePath } from "react-router-dom";




const Home = () => {
  const[prod,setProd]=useState([])
  useEffect(()=>{
axios.get(` http://localhost:8000/posts`)
.then((res)=>setProd(res.data))
  },[])
  console.log(prod)

 
  return <>
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
  </>;
};

export default Home;
