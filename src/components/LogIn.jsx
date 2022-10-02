import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import {Navigate, NavLink} from "react-router-dom"
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./home";
import Footer from "./Footer";
// import { AuthContext } from "./AuthContext/AuthContextProvider";
// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in thisdfs page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
// const [login,SetLogin]=React.useState("false")
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
//   const [token,setToken]= useState('')
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };
  const handleClick=()=>{
    axios.post(`https://reqres.in/api/login`,{
      email:email,
      password:pass
    }
    ).then((res)=>{
// console.log(res)
    //   setToken(res.data) 
    //   toggleAuth(token)
    console.log(res.status)
    if (res.status === 200) {
    
      alert("login sucesfully");
      return 
      <Navigate to={"/"}/>
      
      }
      else if(res.status === 400){
        console.log(error)
        alert("Email or password is wrong");
        return;
      }
 
    })
  }
  // eve.holt@reqres.in
  // cityslicka
  
  return (

    
    
    <Container>
    
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Email"
          onChange={handleChange}
        
      
        ></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Enter Password"
          onChange={handleChangePass}
       
        
        ></Input>
      </FormControl>
      <Button onClick={handleClick} >Submit</Button>
  
    </Container>
   
   
  );
};
export default Login;





