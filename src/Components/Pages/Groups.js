import React, { useState } from 'react';
//material ui component
import { Grid, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Groups = () => {
   const [groups] = useState([
      {
         id: 1,
         title: 'Gaming and VR',
         description: 'Technojam Gaming speciality Group is eDdicated to development of games.'
      },
      {
         id: 2,

         title: 'Cloud Computing',

         description: 'Technojam Cloud speciality Group is Dedicated to development on Cloud'
      },
      {
         id: 3,

         title: 'Web Technologies',

         description: 'Technojam Web specialty Group is Dedicated to development of Websites'
      },
      {
         id: 4,
         title: 'Android',
         description: 'Technojam Android specialty Group is Dedicated to development of Apps'
      },
      {
         id: 5,
         title: 'CyberSecurity',
         description: 'Technojam CyberSecurity specialty Group is Dedicated to Ethical hacking'
      },
      {
         id: 6,
         title: 'Competitive Coding',
         description: 'Technojam Competitive Coding specialty Group is Dedicated to Data Structures'
      }
   ]);

   return (
      <section>
         <Container maxWidth='lg'>
            <div style={{ marginBottom: '20px', marginTop: '90px' }}>
               <div>
                  <Typography variant='h3' className='view_title'>
                     <br />
                     Speciality Groups
                  </Typography>
                  <hr className='view_line' />

                  <br />
                  <Grid container spacing={3} direction='row' justify='flex-start' alignItems='flex-start'>
                     {groups.map(group => (
                        <Grid item xs={12} sm={4} md={3} key={group.id}>
                           <Card
                              className='card--shadow'
                              style={{
                                 position: 'relative',
                                 border: '1px solid rgba(0, 0, 0, 0.04)',
                                 padding: '15px 20px',
                                 fontSize: '18px',
                                 fontWeight: '600',
                                 marginBottom: '30px',
                                 borderRadius: '15px',
                                 maxHeight: '400px'
                              }}>
                              <CardContent>
                                 <Typography variant='h5'>{group.title}</Typography>
                              </CardContent>
                              <CardContent className='card_content_top'>
                                 <Typography variant='body2' color='textSecondary' component='p' style={{ fontFamily: 'Roboto' }}>
                                    {group.description}
                                 </Typography>
                              </CardContent>
                           </Card>
                        </Grid>
                     ))}
                  </Grid>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Groups;
