import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
// import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import { resolvePath } from "react-router-dom";
import { Button, Grid, GridItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger,Image,Box ,WrapItem,Wrap} from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup,PhoneIcon,ArrowDownIcon} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'







function Navbar(){
 
    return(
<Grid
  h='110px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(7, 1fr)'
  gap={1}
>
  <GridItem rowSpan={2} colSpan={1} >
  <Box boxSize='sm' style={{marginTop:"30px" , width:"250px"}}>
  <Image  style={{width:"250px"}} src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png' alt='Dan Abramov' />
</Box>
  </GridItem>




  <GridItem style={{marginTop:"10px"}} colSpan={6} >
  <Wrap >
  <WrapItem>
    <Avatar style={{width:"20px",height:"20px" ,marginTop:"3px"}} name='mobile_icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAQlBMVEX///8AAADq6urX19d+fn6enp6UlJTS0tLz8/P5+fmzs7MsLCywsLCRkZEzMzPe3t52dnZtbW2EhISqqqpGRkbIyMhwtd/GAAABNElEQVRoge3by3LCMAyFYYyBkAC5wvu/amdaICwUtZFiu4v/rDX+Js5gsvDZ7dTUzXAJ63MZmlpfWM/VYL5ytbOjgw1htLKTiw1hsrFnJxvC2eTehJX6WMmJvTB9M7ntqieQdqe1sOI2K/NbbfReWqhbHO+k8f1WbntaivRWtnNXBvffu8PBksHtLv9ytHRuN5rciIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi2tyS92TGY+WjG7XFVxcXD33qZnu+d3qe6jK7b6OT/E6bjp3vlEt3c5O587/FuoDb+5+zGV151ZEndWdvwZiVrd/jx2yuuHxnHqoUwnOjZ8yxi+VjiTnc3+SuhJu118TMRZFxGbAqpj6GvoJ+KfY+iml+jil+kfF+lbF+mUJ+3Rf1OkYC0dG3IsAAAAASUVORK5CYII=' />
   
    <p>Save $3 with App</p>
    <Avatar style={{width:"20px",height:"20px" ,marginTop:"3px"}} name='down Arrow' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAXVBMVEX///8AAADW1tbZ2dkiIiIeHh7GxsYbGxsXFxcZGRkRERHMzMzS0tLJycnDw8N7e3urq6sLCwv4+Phzc3NpaWmkpKTp6ek3Nze0tLTy8vI9PT1KSkrh4eEnJydFRUW3Y8caAAAC0ElEQVR4nO2ZW2OrIBCE4z2Jl5o2vSSnOf//ZzZNjNkRVFSgPsz3isLALsOimw0hhBBCCCGEEEIIIcQzr/Xb8f3D33gf78e3+lXb8i+4cgl9Kfm+/I73/1ttOX0Gdyo/SvJmuM+T0vTVNAVJ6UNJeHmM96W0vQQthXsl0XO0lyEpB+cxKnZDUupnY7DL3Sp5RudKrTSfzqI5cKqlkCOd1bTdhJl4IHMYo1KuSRLpHomkWHe5G27lMFolVy2xfMjRni7lGHGPkqvgvXwsdaJETnc/YO0hxMjBGRCZDxBCjKznbnqQyz4yVViXxPKeLmCio4uOCW51H4GfbA3CD/6ytZi7KRiXUSJCam2trUth4ieKlkS+ZClfctmn3mN1QL7EVrwulRlrkietFjkFG/6yoEP0l8W5m8rexvxE0QIvL8yXEpJv8iJbjFGxtCuI0X7BGVDBITtrUuAv2Wx/meUnXUIb/gL1STI70OAvyax9VInafpKfKFrklA4zOlqcsU+iZf5Sybf7q0cz0F8mngHpMj8Z1DKtO4vRabTIGB0mxKiaUj2agf5ivKdLuXfm+kkXuJOY1phQnwzdMiZqkTEyu8NWUPJYvMZAjEz8pZB5Yis6jZZpd1isT6wq6eTL2BlQydreXp60WuREh03Cup90MT4DrLq9HsM7bCmj42JNblrAX3q0OPITRYs83vbaGEH1OL9SGgfvsJp1yWHhnOTJgxAOFkULVI87x78L4DtD0jkDqunfCpYw8B0T/cRpdBotfd/IPPhJF/CXrN1HqQ8/GdTyiJFzt+/RAjXmLUYOqkczFH/JbdxGZ2qBxMjB7TOvSjpel8gDwbWzabQEPXhX0v2O2S6Q5+jcwZrhjruqYETLKqLTaIlRiE8/6YJno18/6SLz5a/ypNUSryE6d6JVRKfRcvtXfl6Bks3mVB+PteYfOiGEEEIIIYQQQgghZJ38ANt4EemzUgKkAAAAAElFTkSuQmCC' />
   
  
  </WrapItem>
  <WrapItem>
    <Box>Support Center</Box>
  </WrapItem>
  <WrapItem>
    <Box>
        Ship to
        <Avatar style={{width:"20px",height:"20px" ,marginTop:"3px",radious:"0px"}} name='USA flag' src='data:image/png;base64,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' />/USD
    </Box>
   
  </WrapItem>
  <WrapItem>
   <Box>Language
   <Avatar style={{width:"20px",height:"20px" ,marginTop:"3px",radious:"none" }} name='down Arrow' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAXVBMVEX///8AAADW1tbZ2dkiIiIeHh7GxsYbGxsXFxcZGRkRERHMzMzS0tLJycnDw8N7e3urq6sLCwv4+Phzc3NpaWmkpKTp6ek3Nze0tLTy8vI9PT1KSkrh4eEnJydFRUW3Y8caAAAC0ElEQVR4nO2ZW2OrIBCE4z2Jl5o2vSSnOf//ZzZNjNkRVFSgPsz3isLALsOimw0hhBBCCCGEEEIIIcQzr/Xb8f3D33gf78e3+lXb8i+4cgl9Kfm+/I73/1ttOX0Gdyo/SvJmuM+T0vTVNAVJ6UNJeHmM96W0vQQthXsl0XO0lyEpB+cxKnZDUupnY7DL3Sp5RudKrTSfzqI5cKqlkCOd1bTdhJl4IHMYo1KuSRLpHomkWHe5G27lMFolVy2xfMjRni7lGHGPkqvgvXwsdaJETnc/YO0hxMjBGRCZDxBCjKznbnqQyz4yVViXxPKeLmCio4uOCW51H4GfbA3CD/6ytZi7KRiXUSJCam2trUth4ieKlkS+ZClfctmn3mN1QL7EVrwulRlrkietFjkFG/6yoEP0l8W5m8rexvxE0QIvL8yXEpJv8iJbjFGxtCuI0X7BGVDBITtrUuAv2Wx/meUnXUIb/gL1STI70OAvyax9VInafpKfKFrklA4zOlqcsU+iZf5Sybf7q0cz0F8mngHpMj8Z1DKtO4vRabTIGB0mxKiaUj2agf5ivKdLuXfm+kkXuJOY1phQnwzdMiZqkTEyu8NWUPJYvMZAjEz8pZB5Yis6jZZpd1isT6wq6eTL2BlQydreXp60WuREh03Cup90MT4DrLq9HsM7bCmj42JNblrAX3q0OPITRYs83vbaGEH1OL9SGgfvsJp1yWHhnOTJgxAOFkULVI87x78L4DtD0jkDqunfCpYw8B0T/cRpdBotfd/IPPhJF/CXrN1HqQ8/GdTyiJFzt+/RAjXmLUYOqkczFH/JbdxGZ2qBxMjB7TOvSjpel8gDwbWzabQEPXhX0v2O2S6Q5+jcwZrhjruqYETLKqLTaIlRiE8/6YJno18/6SLz5a/ypNUSryE6d6JVRKfRcvtXfl6Bks3mVB+PteYfOiGEEEIIIYQQQgghZJ38ANt4EemzUgKkAAAAAElFTkSuQmCC' />
   </Box>
  </WrapItem>
  <WrapItem>
  <Select placeholder='Country Website' border={"none"} style={{padding:"none"}} >
  <option value='Option 1'>Global(English)</option>
  <option value='Option 2'>FranceOption 2</option>
  <option value='Option 3'>Espana</option>
  <option value='Option 4'>PoccNr</option>
  <option value='Option 5'>Portugal</option>
  <option value='Option 6'>Deutschland</option>
  <option value='Option 7'>Brasil</option>
  <option value='Option 8'>Tuekiye</option>
  <option value='Option 9'>Polska</option>
  <option value='Option 10'>Japan</option>
</Select>
  </WrapItem>
  
</Wrap>
   
  </GridItem>
 
  
  <GridItem colSpan={6}>
  
  <Wrap>
  <WrapItem>
  <Input style={{width:"400px",borderColor:"#ffda00 ",MozBorderRadiusBottomleft:"5px",marginLeft:"50px"}} placeholder='Search Here' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
    <p>Log In</p>
  </WrapItem>

 
</Wrap>

  </GridItem>
</Grid>
    ) 
}
export default Navbar;

