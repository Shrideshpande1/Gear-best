import React from "react"
import Login from "./LogIn"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Options_and_slider from "./Options_and_silder"
import Categories_and_slider from "../Links/Categories_and_slider"
function SignIn(){
    return(
<>
<Navbar/>
<Categories_and_slider/>
<Login/>
<Footer/>
</>
    )
}
export default SignIn