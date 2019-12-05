import React, { Component, useState } from 'react';
//material ui component

import { Grid, Typography, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import '../style.css';
import { Color } from '../color';

import "../style.css";


const style = {
   overFlow: "hidden",
   marginTop: "60px",
   marginBottom: "-30px",
   square: {
      border: "4px solid #ff0000c9",
      padding: "20px",
      borderRadius: "15px",
      position: "absolute",
      marginTop: "160px",
      left: "626px",
      marginRight: "40px"
   },
   square1: {
      border: "2px solid red",
      padding: "10px",
      position: "absolute",
     
      left: "46px",
      marginRight: "40px",
      marginTop: "70px",
   },
   back: {
      width: "100%",
      height: "100%",
      //Put new background Image here of Size 1550 * 720 px


      //Good Boy don't touch anything else
      backgroundSize: "cover",

      backgroundPositionX: "0%",
      minHeight: "95vh",
   },
   button: {
      color: "white",
      backgroundColor: "#ff3b01f5",
      padding: '10px 23px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600'
   },

};

/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

const Homepage = () => {
   const [content] = useState([
      {
         content: "",
         title: "",
         cta: "#",
         buttonname: "Register Now",
         backgroundImageUrl: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/20191105_204943_0000.png",
         backgroundImageUrlM: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/mobile+web+size.png"
      }
   ]);

   return (
      <div style={style} >
         {content.map(item => (
            <div>
                <Hidden smDown>
            <div
               style={{
                  ...style.back,
                  backgroundImage: `url(${item.backgroundImageUrl})`
               }}
               key={item.title}>
               <Grid container xs={6} sm={3} md={3}>
                 
                     <div style={style.square}>
                        <div className='home_grid'>
                           <Typography variant='h3' className='letter_spacing' style={{ color: "#000000cf", fontWeight: "900", fontSize: "36px" }}>
                              {item.title}
                           </Typography>


                           <Typography
                              variant='body2'
                              className='home_grid_typo'
                              style={{
                                 fontSize: '21px',
                                 color: '#000000bf',
                                 fontWeight: '500'
                              }}>
                              {item.content}
                           </Typography>

                           <Button variant='contained' style={style.button}>
                              {item.buttonname} <a src={item.cta} target='_blank' rel='noopener noreferrer' />
                           </Button>
                        </div>
                     </div>
                 
               </Grid>
            </div>
            </Hidden>
            <Hidden mdUp>
            <div  style={{
                  ...style.back,
                  backgroundImage: `url(${item.backgroundImageUrlM})`
               }}>
               <Grid container xs={6} sm={3} md={3}>
                  
                     <div style={style.square1}>
                        <div className='home_grid letter_spacing'>
                           <Typography
                              variant='h3'
                              style={{
                                 color: 'black',
                                 fontSize: '28px'
                              }}>
                              {item.title}
                           </Typography>

                           <Typography
                              variant='body2'
                              className='home_grid_typo'
                              style={{
                                 fontSize: '14px',
                                 color: 'black'
                              }}>
                              {item.content}
                           </Typography>

                           <Button variant='contained' style={style.button}>
                              {item.buttonname} <a href={item.cta} target='_blank' />
                           </Button>
                        </div>
                     </div>
                 
               </Grid>
            </div>
            </Hidden>
            </div>
   ))
         }
      </div >
   );
};

export default Homepage;
