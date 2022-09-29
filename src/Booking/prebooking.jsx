import { Box, Grid, GridItem, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import Categories_and_slider from "../Links/Categories_and_slider";
import axios from "axios";
import Counter from "./counter";
import { useState } from "react";
import { useEffect } from "react";
import { Divider } from '@chakra-ui/react'
import Footer from "../components/Footer";

function Pre_Booking() {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/Recommended`)
      .then((res) => setProd(res.data));
  }, []);
  console.log(prod);
  return (
    <>
      <Navbar />
      <Categories_and_slider />

      <Box style={{ display: "flex" }}>
        <Box>
          <Image
            src="https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16457/goods_img_big-v1/329d1df7db28.jpg"
            alt="Dan Abramov"
          />
        </Box>

        <Box>
          <h1>
            Smart Watch Men Full Touch Screen Sport Fitness Watch IP67
            Waterproof Bluetooth For Android ios smartwatch Men+box - Black
          </h1>
          <p>New Smart Watch</p>
          <Image
            style={{ width: "150px" }}
            src="https://www.pngplay.com/wp-content/uploads/6/5-Star-Rating-Vector-Transparent-PNG.png"
            alt="Dan Abramov"
          />
          {/* //======================= */}
          <Box
            style={{
              display: "flex",
              backgroundColor: "rgb(243,2,64)",
              width: "600px",
              color: "white",
            }}
          >
            <Box style={{}}>FLASH SALE</Box>
            <Box>
              <p>for sale</p>
              <p>17 days left</p>
            </Box>
          </Box>
          {/* //====================== */}

          <Box
            style={{
              display: "flex",
              marginTop: "20px",
            }}
          >
            <Box style={{ marginRight: "20PX" }}>
              <p>Price</p>
            </Box>
            <Box>
              <Box
                style={{
                  display: "flex",
                }}
              >
                <Box>$29.99</Box>
                <Box>$35.99</Box>
                <Box style={{ backgroundColor: "rgb(243,2,64)" }}>50%off</Box>
              </Box>
              <Box>Save an extra $0.06 for using the App</Box>
            </Box>
          </Box>

          {/* //======= */}

          <Box
            style={{
              display: "flex",
              marginTop: "20px",
            }}
          >
            <Box style={{ marginRight: "20PX" }}>
              <p>Shipping</p>
            </Box>

            <Box>
              <Box>FREE SHIPING to United States Via Registered Air Mall</Box>
              <Box>
                Ship between Oct 03 - Oct 07 , Estimated Shipping Time: 15:60
                business days
              </Box>
            </Box>
          </Box>

          {/* ====================== */}
          <Box
            style={{
              display: "flex",
              marginTop: "20px",
            }}
          >
            <Box style={{ marginRight: "20PX" }}>
              <p>Color</p>
            </Box>

            <Box
              style={{
                display: "flex",
              }}
            >
              <Button>Black</Button>
              <Button>Pink</Button>
              <Button>Blue</Button>
              <Button>Yellow</Button>
            </Box>
          </Box>

          {/* ===================== */}
          <Box
            style={{
              display: "flex",
              marginTop: "20px",
            }}
          >
            <Box style={{ marginRight: "20PX" }}>
              <p>Qnt</p>
            </Box>
            <Box
              style={{
                display: "flex",
              }}
            >
              <Box>
                <Counter />
              </Box>
              <Box style={{ marginLeft: "20PX" }}>
                In stock Max per order : 983
              </Box>
            </Box>
          </Box>
          {/* ================================ */}
          <Box
            style={{
              display: "flex",
              marginTop: "20px",
            }}
          >
            <Button
              style={{
                backgroundColor: "rgb(243,2,64)",
                marginRight: "20PX",
                color: "white",
                width: "150px",
              }}
            >
              Add to Cart
            </Button>
            <Button
              style={{
                color: "rgb(243,2,64)",
                marginRight: "20PX",
                width: "150px",
              }}
            >
              Buy Now
            </Button>

            <Image
              style={{
                height: "50px",
              }}
              src="data:image/png;base64,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"
              alt="Dan Abramov"
            />
          </Box>

          {/* ======================== */}
          <Box
            style={{
              display: "flex",
              marginTop: "20px",
            }}
          >
            <Box>
              <Image
                style={{
                  height: "20px",
                }}
                src="https://css.gbtcdn.com/imagecache/gbw/img/site/paypal@.png"
                alt="Dan Abramov"
              />
            </Box>
            <Box>
              <Image
                style={{
                  height: "20px",
                  marginLeft: "20PX",
                }}
                src="https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/VISA.png?imbypass=true"
                alt="Dan Abramov"
              />
            </Box>
            <Box>
              <Image
                style={{
                  height: "20px",
                  marginLeft: "20PX",
                }}
                src="https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/mc_vrt_opt_pos_73_2x.png?imbypass=true"
                alt="Dan Abramov"
              />
            </Box>
          </Box>
          {/* ============================= */}

          <Box
            style={{
              display: "flex",
              marginTop: "20px",
            }}
          >
            <p>Tax Info</p>
            <p
              style={{
                height: "20px",
                marginLeft: "20PX",
              }}
            >
              Price Protection{" "}
            </p>
            <p
              style={{
                height: "20px",
                marginLeft: "20PX",
              }}
            >
              Price Disclaimer
            </p>
            <p
              style={{
                height: "20px",
                marginLeft: "20PX",
              }}
            >
              Report Item
            </p>
          </Box>

          {/* ///////////////////////////////////////// */}
        </Box>
      </Box>
      {/* =================xxxxxx=============== */}

      <h1 style={{ textAlign: "left", fontSize: "25px", fontWeight: "bold" }}>
        Recommended for You
      </h1>

      <Grid templateColumns={{ base: "repeat(5,1fr)" }} Gap={10}>
        {prod.map((item) => (
          <GridItem key={item.id}>
            <Box
              bg="gray.50"
              spacing="10"
              p={2}
              textAlign="center"
              rounded="lg"
              color="gray.400"
            >
              <Image
                style={{ width: "220px", height: "200px" }}
                boxsize="ls"
                src={item.image}
              />
              <Text>Title:{item.title}</Text>
              <Text>Price:{item.price}$</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
      {/* ================================================?? */}
     
<Box style={{width:"80%",margin :'auto'}}>

<h1 style={{textAlign:"left"}}>Description</h1>
<br />
<Box style={{textAlign:"left"}}>

<h1 style={{ textAlign: "left", fontSize: "18px", fontWeight: "bold" }}>
Main Featchers
      </h1>
  <Divider />

  <Box >
    <p>Introduction to watches:</p>
    <p>Screen :1.28" 240*240 full fit fit full touch screen</p>
<br />
    <p>BAttery: 220 mAh polymer</p><br />
    <p>Packing box size :15.1*7.5*3.0cm</p><br />
    <p>Bluetooth: 4.0</p><br />
    <p>Support mobile version :iOS 9.0 and above Android 5.0 and above</p>
    
    <br /><p>Featcher</p><br />
    <p>Incoming call/SMS content push</p><br />
    <p>Information Reminder There are function enable switches on the APP side (incoming calls, text messages, Wechat, QQ, Facebook, Twitter, LinkedIn, WhatsApp, Line, Instagram, Snapchat, Skype and other mobile applications) and events such as sitting, alarm clock, drinking water, taking medicine, etc. Information reminder, alarm clock, photo, raised wrist screen, sedentary reminder, stopwatch, countdown, search for mobile phone, bracelet brightness adjustment, bracelet screen duration adjustment, step counting, heart rate data synchronization APP support, exercise, mileage, calories, Steps, sleep, total sleep, deep, light sleep time, history record, heart rate, blood pressure, sleep, exercise</p>
  <br />
  <p>Support language</p><br />
  <p>The bracelet interface supports English, Simplified Chinese, French, German, Italian, Spanish, Russian, Portuguese (multi-language support for message content push</p>
  
  
  </Box>

  
</Box><br />
{/* ====================================== */}

<h1 style={{ textAlign: "left", fontSize: "18px", fontWeight: "bold" }}>
Specification
      </h1>

<Box>
<br />

  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/5b56097d22c5.jpg' alt='Dan Abramov' />
  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/13bd2ac4f8a6.jpg' alt='Dan Abramov' />
  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/dd233b68c810.jpg' alt='Dan Abramov' />
  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/7f8615baa606.jpg' alt='Dan Abramov' />
  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/05bbd61830f7.jpg' alt='Dan Abramov' />
  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/2e216bf9fd7d.jpg' alt='Dan Abramov' />
  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/b443921bd3c3.jpg' alt='Dan Abramov' />
  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/8a9e0ce92ec7.jpg' alt='Dan Abramov' />
  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/80eeff738313.jpg' alt='Dan Abramov' />
  <Image style={{width:"950px"}} src='https://des.gbtcdn.com/storage/desc/6883820374342168576/16457/cf8836e7bd4b.jpg' alt='Dan Abramov' />

 

</Box>

</Box>

<Footer></Footer>
    </>
  );
}
export default Pre_Booking;
