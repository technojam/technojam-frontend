import React, { Component, useState } from 'react';
//material ui component
import { Grid, Typography, Hidden } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import '../style.css';

const style = {
   marginTop: '60px',
   maxHeight: '720px',
   height: '90vh',

   square: {
      border: '4px solid yellow',
      padding: '20px',

      position: 'absolute',
      marginTop: '180px',
      left: '46px',
      marginRight: '40px'
   },
   square1: {
      border: '4px solid yellow',
      padding: '20px',
      position: 'absolute',
      marginTop: '18px',
      left: '46px',
      marginRight: '40px',
      marginTop: '100px'
   },
   back: {
      width: '100%',
      height: '100%',
      //Put new background Image here of Size 1550 * 720 px

      //Good Boy don't touch anything else
      backgroundRepeat: 'no-repeat',

      backgroundPositionX: 'center',
      minHeight: '750px'
   },
   button: {
      color: 'black',
      backgroundColor: 'yellow'
   }
};

/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

const Homepage = () => {
   const [content] = useState([
      {
         content: 'Technojam is hosting 24 Hours hackathon. In Galgotias University Those who want to know more can register here.',
         title: 'DEXTRIX 2.0',
         cta: '#',
         buttonName: 'Register here',
         backgroundImageUrl: 'https://tj-static.s3.ap-south-1.amazonaws.com/etc/9511.png'
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
                           <Typography variant='h3' className='letter_spacing' style={{ color: 'white' }}>
                              {item.title}
                           </Typography>
                           <br />

                           <Typography
                              variant='body2'
                              className='home_grid_typo'
                              style={{
                                 fontSize: '21px'
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
                                 color: 'white',
                                 fontSize: '28px'
                              }}>
                              {item.title}
                           </Typography>
                           <br />
                           <Typography
                              variant='body2'
                              className='home_grid_typo'
                              style={{
                                 fontSize: '14px'
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
         ))}
      </div>
   );
};

export default Homepage;
