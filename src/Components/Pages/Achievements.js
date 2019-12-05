import React, { useState } from 'react';
//material ui component
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import '../style.css';

const Achievements = () => {
   //I'm assuming these are just temporarily static; if not, remove from state and just hard code them
   const [achievements] = useState([
      {
         id: 1,

         title: 'Nasa Space Apps Challenge',
         by: 'Darshan Baid',
         date: 'September 15, 2019',
         description:
            'Technojam conducted 24 hours hackathon in delhi region at galgotia College almost 400 students took part. it is recognized by NASA',
         image: 'https://tj-static.s3.ap-south-1.amazonaws.com/etc/space.jpg'
      },

      {
         id: 2,
         title: 'First Ideathon',
         by: 'Shwetank',
         date: '26 August, 2019',
         description:
            'Conducted Ideathon in Galgotias University Induction Program. Almost 300 students took part. Crowd was really enthusiastic',
         image: ' https://tj-static.s3.ap-south-1.amazonaws.com/etc/ideathon.JPG'
      },

      {
         id: 3,
         title: 'First Gsocer',
         by: 'Rahul Chuhan',
         date: 'May 12, 2018',
         description: 'Rahul chauhan Member of Team Teachnojam cleared Gsoc in 2019 in Galgotias University. He worked on R project',
         image: 'https://tj-static.s3.ap-south-1.amazonaws.com/etc/rahul.jpg'
      },

      {
         id: 4,
         title: 'Dextrix 1.0',
         by: 'Team Technojam',
         date: '26 August, 2018',
         description: "Conducted Dextrix1.0 Galgotias's University first ever hackthon in our university. Almost 200 students took part. ",
         image: 'https://tj-static.s3.ap-south-1.amazonaws.com/etc/dextrix.jpg'
      }
   ]);

   return (
      <Container maxWidth='lg'>
         <div className='view_container'>
            <div>
               <Typography variant='h3' className='view_title'>
                  <br />
                  Our Achievements
               </Typography>
               <hr className='view_line' />
               <br />

               <Grid container spacing={3} direction='row' justify='flex-start' alignItems='flex-start'>
                  {achievements.map(achievement => (
                     <Grid item xs={12} sm={3} md={4} key={achievement.id}>
                        <Card className='card--shadow card_content_achieve'>
                           <CardMedia>
                              <img src={achievement.image} width='100%' height='auto' />
                           </CardMedia>

                           <CardContent>
                              <Typography variant='h5' component='p' className='letter_spacing'>
                                 {achievement.title}
                              </Typography>
                           </CardContent>

                           <CardContent style={{ marginTop: '-20px' }}>
                              <Typography
                                 variant='body2'
                                 color='textSecondary'
                                 component='p'
                                 style={{ letterSpacing: '0.9px', lineHeight: '21px' }}>
                                 {achievement.description}
                              </Typography>
                           </CardContent>
                        </Card>
                     </Grid>
                  ))}
               </Grid>
            </div>
            <br />
            <br />
         </div>
      </Container>
   );
};
export default Achievements;
