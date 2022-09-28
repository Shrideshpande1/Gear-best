import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
// import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import { resolvePath } from "react-router-dom";
import { Button, Grid, GridItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger } from '@chakra-ui/react'



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
            hi please cliclk me
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
          hi ahdf ahfgiahiudfh adhfuh ughag hiugfhihfgfvx fbvsdhf gsdf gshfg hsdfh ghdsfj  gk dfhgshfgh sfh g hdfighsidfhgidhfgsiofgsofgo sdfg dfg sd fg dfg jsd n kjfnkjnb nsdfk jg nsd jfng sdnfgnsdnsdfg dn dfgun fng
        </PopoverBody>
    </PopoverContent>
   </Popover>
   <Popover isLazy placement="left"  trigger="hover"  flip="false"   orientation="vertical"  >
    <PopoverTrigger>
        <Button>
            hi please cliclk me
        </Button>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow/>
        <PopoverCloseButton/>
        <PopoverBody>
         kay chally bhaea

        </PopoverBody>
    </PopoverContent>
   </Popover>
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
 
</Grid>

    )
}
export default Options_and_slider;

