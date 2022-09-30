import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
// import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import { resolvePath } from "react-router-dom";
import { Button, Grid, GridItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import Slider from "./Slider";


function Options_and_slider(){
   




    return(
<Grid
  templateAreas={`
                  "nav main"
                  `}
  gridTemplateRows={'150px 1fr'}
  gridTemplateColumns={'268.5px 1fr'}
  h='400px'
 
  color='blackAlpha.700'
  fontWeight='bold'
>
 
<GridItem pl='2'  area={'nav'}>
   <Popover isLazy placement="left" strategy="fixed" trigger="hover" height="200px" widht="500px">
    <PopoverTrigger>
        <Button style={{width:"260px"}}>
        Consumer Electronics
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
       <h1  style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}>Smart Electronics</h1>
       <h2  style={{textAlign:"left"}}>Smart Watches</h2>
       <h2  style={{textAlign:"left"}}>Smart Watch Phone</h2>
       <h2  style={{textAlign:"left"}}>Smart Wristband</h2>
       <h2  style={{textAlign:"left"}}>Smart Watch Accessories</h2>
       <h2  style={{textAlign:"left"}}>Sport Watch</h2>
       <h2  style={{textAlign:"left"}}>Smart Health Watch</h2>
        </PopoverBody>
    </PopoverContent>
   </Popover>
  

  
   <Popover isLazy placement="left" strategy="fixed" trigger="hover" height="200px" widht="500px">
    <PopoverTrigger>
        <Button style={{width:"260px"}}>
        Industrial & Scientific
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
       <h1  style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}>3D Printer and Supplies</h1>
       <h2  style={{textAlign:"left"}}>3d Printers, 3D Printer Kits</h2>
       <h2  style={{textAlign:"left"}}>3D Printer Filament</h2>
       <h2  style={{textAlign:"left"}}>3D Scanners</h2>
       <h2  style={{textAlign:"left"}}>3D Printer Parts</h2>
       <h2  style={{textAlign:"left"}}>3D Printer Pen </h2>
       <h2  style={{textAlign:"left"}}>3D Printer Module Board</h2>
        </PopoverBody>
    </PopoverContent>
   </Popover>


   <Popover isLazy placement="left" strategy="fixed" trigger="hover" height="200px" widht="500px">
    <PopoverTrigger>
        <Button style={{width:"260px"}}>
        Cell Phones & accessories
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
       <h1  style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}>Top Brands</h1>
       <h2  style={{textAlign:"left"}}>One Plus</h2>
       <h2  style={{textAlign:"left"}}>Redmi</h2>
       <h2  style={{textAlign:"left"}}>Xiaomi</h2>
       <h2  style={{textAlign:"left"}}>NOKIA</h2>
       <h2  style={{textAlign:"left"}}>Apple </h2>
       <h2  style={{textAlign:"left"}}>Realme</h2>
        </PopoverBody>
    </PopoverContent>
   </Popover>
  
   <Popover isLazy placement="left" strategy="fixed" trigger="hover" height="200px" widht="500px">
    <PopoverTrigger>
        <Button style={{width:"260px"}}>
      Applications
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
       <h1  style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}>Vacuum & Floor Care</h1>
       <h2  style={{textAlign:"left"}}>vacuum Cleaner</h2>
       <h2  style={{textAlign:"left"}}>Upright Vaccums</h2>
       <h2  style={{textAlign:"left"}}>Stream Cleaner</h2>
       <h2  style={{textAlign:"left"}}>Robotic Window Cleaner</h2>
       <h2  style={{textAlign:"left"}}>Robotic Vacuum Accessories </h2>
       <h2  style={{textAlign:"left"}}>Power Cleaner</h2>
        </PopoverBody>
    </PopoverContent>
   </Popover>

   <Popover isLazy placement="left" strategy="fixed" trigger="hover" height="200px" widht="500px">
    <PopoverTrigger>
        <Button style={{width:"260px"}}>
        Outdoors,Fitness & Sports
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
       <h1  style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}>Scooters and Wheels</h1>
       <h2  style={{textAlign:"left"}}>Electric Scooters</h2>
       <h2  style={{textAlign:"left"}}>Kick Scooter</h2>
       <h2  style={{textAlign:"left"}}>Skilling & Snowboarding</h2>
       <h2  style={{textAlign:"left"}}>Scooter Accessories</h2>
       <h2  style={{textAlign:"left"}}>Roller Skating </h2>
       <h2  style={{textAlign:"left"}}>Balancing Scooter</h2>
        </PopoverBody>
    </PopoverContent>
   </Popover>
  
   <Popover isLazy placement="left" strategy="fixed" trigger="hover" height="200px" widht="500px">
    <PopoverTrigger>
        <Button style={{width:"260px"}}>
       Coumputer ,Tablets & Office
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
       <h1  style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}>Coumputers & Tablets</h1>
       <h2  style={{textAlign:"left"}}>Laptops</h2>
       <h2  style={{textAlign:"left"}}>Tablet PCs</h2>
       <h2  style={{textAlign:"left"}}>MINI PC</h2>
       <h2  style={{textAlign:"left"}}>All-In-One Coumputers</h2>
       <h2  style={{textAlign:"left"}}>Tablet Accessories</h2>
       <h2  style={{textAlign:"left"}}>Laptop Accessories</h2>
        </PopoverBody>
    </PopoverContent>
   </Popover>
   
  </GridItem>
 
  {/* <Popover isLazy placement="left" strategy="fixed" trigger="hover" height="200px" widht="500px">
    <PopoverTrigger>
        <Button style={{width:"260px"}}>
      Health & Personal Care
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
       <h1  style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}>3D Printer and Supplies</h1>
       <h2  style={{textAlign:"left"}}>3d Printers, 3D Printer Kits</h2>
       <h2  style={{textAlign:"left"}}>3D Printer Filament</h2>
       <h2  style={{textAlign:"left"}}>3D Scanners</h2>
       <h2  style={{textAlign:"left"}}>3D Printer Parts</h2>
       <h2  style={{textAlign:"left"}}>3D Printer Pen </h2>
       <h2  style={{textAlign:"left"}}>3D Printer Module Board</h2>
        </PopoverBody>
    </PopoverContent>
   </Popover>

   <Popover isLazy placement="left" strategy="fixed" trigger="hover" height="200px" widht="500px">
    <PopoverTrigger>
        <Button style={{width:"260px"}}>
      Home Improvement & Tools
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
       <h1  style={{textAlign:"left", fontSize:"22px",fontWeight:"bold"}}>3D Printer and Supplies</h1>
       <h2  style={{textAlign:"left"}}>3d Printers, 3D Printer Kits</h2>
       <h2  style={{textAlign:"left"}}>3D Printer Filament</h2>
       <h2  style={{textAlign:"left"}}>3D Scanners</h2>
       <h2  style={{textAlign:"left"}}>3D Printer Parts</h2>
       <h2  style={{textAlign:"left"}}>3D Printer Pen </h2>
       <h2  style={{textAlign:"left"}}>3D Printer Module Board</h2>
        </PopoverBody>
    </PopoverContent>
   </Popover> */}


<GridItem>
    <Slider/>
</GridItem>














 
 
</Grid>

    )
}
export default Options_and_slider;

