import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import { resolvePath } from "react-router-dom";


// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;
// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(json=>console.log(json))
// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

const Collection = () => {
  const[prod,setProd]=useState([])
  useEffect(()=>{
axios.get(`http://localhost:8000/collection`)
.then((res)=>setProd(res.data))
  },[])
  console.log(prod)

 
  return <>
  <h1 style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}> COLLECTION</h1>
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
        <Image style={{width:"150px",height:"150px"}} boxsize="ls" src={item.img}/>
        <Box noOfLines={2}>Title:{item.title}</Box>
       
    
      </Box>
      
</GridItem>)}
  </Grid>
  </>;
};

export default Collection;
