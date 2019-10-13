import React, { Component, useState } from 'react';
//material ui component

import { Grid, Typography, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import '../style.css';
import { Color } from '../color';

import "../style.css";


const style = {
   marginTop: "60px",
   maxHeight: "720px",
   height: "90vh",

   square: {
      border: "4px solid #ff0000c9",
      padding: "20px",
      "border-radius": "15px",
      position: "absolute",
      marginTop: "180px",
      left: "46px",
      marginRight: "40px"
   },
   square1: {
      border: "4px solid red",
      padding: "20px",
      position: "absolute",
      marginTop: "18px",
      left: "46px",
      marginRight: "40px",
      marginTop: "100px",
   },
   back: {
      width: "100%",
      height: "100%",
      //Put new background Image here of Size 1550 * 720 px


      //Good Boy don't touch anything else
      backgroundSize: "cover",

      backgroundPositionX: "0%",
      minHeight: "90vh",
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
         content: "Technojam is a community based on promoting Open source community. We to work on open Source projects and give mentorship in them, to give a first experince on GSOC. we also conduct Handson workshops at various places.",
         title: "Our Community",
         cta: "#",
         buttonname: "Know More",
         backgroundImageUrl: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/b1.jpg"
      }
   ]);

   return (
      <div style={style}>
         {content.map(item => (
            <div
               style={{
                  ...style.back,
                  backgroundImage: `url(${item.backgroundImageUrl})`
               }}
               key={item.title}>
               <Grid container xs={6} sm={3} md={3}>
                  <Hidden smDown>
                     <div style={style.square}>
                        <div className='home_grid'>
                           <Typography variant='h3' className='letter_spacing' style={{ color: "#000000cf", fontWeight: "900", fontSize: "36px" }}>
                              {item.title}
                           </Typography>
                        <br />

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
                        <br />
                        <Button variant='contained' style={style.button}>
                           {item.buttonname} <a src={item.cta} target='_blank' rel='noopener noreferrer' />
                        </Button>
                     </div>
                     </div>
                  </Hidden>

               <Hidden mdUp>
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
                        <br />
                        <Typography
                           variant='body2'
                           className='home_grid_typo'
                           style={{
                              fontSize: '14px',
                              color: 'black'
                           }}>
                           {item.content}
                        </Typography>
                        <br />
                        <Button variant='contained' style={style.button}>
                           {item.buttonname} <a href={item.cta} target='_blank' />
                        </Button>
                     </div>
                  </div>
               </Hidden>
               </Grid>
            </div>
   ))
}
      </div >
   );
};

export default Homepage;
