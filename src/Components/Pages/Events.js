import React, { useState } from 'react';
//material ui component
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import '../style.css';

/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

const Events = () => {
   const [paevent] = useState([
      {
         id: 1,
         title: 'Ideathon',
         feedback: '#',
         date: '26 August, 2019',
         venue: ' GCET Auditorium',
         todo: '#',
         description: "Conducted Ideathon in Galgotias's Induction Program for freshers. almost 300 students took part."
      },

      {
         id: 2,
         title: 'Dextrix 1.0',
         feedback: '#',
         date: 'May 12, 2018',
         venue: ' GU campus',
         todo: '#',
         description: 'Technojam conducted 12 hours hackathon in delhi region at Galgotias university. it is recognized Speaker NASA'
      }
   ]);
   const [upevent] = useState([
      {
         id: 1,
         title: 'WebDev Day 1',
         register: '#',
         date: '26 August, 2019',
         venue: ' GU C Block room no 211',
         Todo: '#',
         description: 'Learn to Develop website from scratch on MERN stack.'
      },

      {
         id: 2,
         title: 'Dextrix 2.0',
         register: '#',
         date: 'May 12, 2018',
         venue: ' GU campus',
         Todo: '#',
         description: 'Technojam conducted 12 hours hackthon in delhi region at galgotias university. it is recognized Speaker NASA'
      }
   ]);

   return (
      <div>
         <Container maxWidth='xl' style={{ width: '100%', top: '0' }}>
            <section style={{ marginBottom: '15px', marginTop: '65px', width: '100%' }}>
               <Grid container direction='row' justify='center' alignItems='center'>
                  <Grid item direction='column' justify='center' alignItems='center' spacing={2} md={4}>
                     <div style={{ display: 'inline', display: 'inlineblock', float: 'left' }}>
                        {upevent.map(event => (
                           <Timeline style={{ border: 'black' }} key={event.id}>
                              <TimelineEvent>
                                 <CardContent>
                                    <Typography variant='h5' component='p' className='letter_spacing'>
                                       {event.title}
                                    </Typography>
                                 </CardContent>
                                 <Divider />
                                 <CardContent>
                                    <Typography variant='body2' color='Secondary' component='p'>
                                       <b>{event.date}</b>
                                    </Typography>
                                 </CardContent>
                                 <CardContent className='card_content_top'>
                                    <Typography
                                       variant='body2'
                                       color='textSecondary'
                                       component='p'
                                       style={{ letterSpacing: '0.9px', lineHeight: '24px' }}>
                                       {event.description}
                                    </Typography>
                                 </CardContent>
                                 <Divider />
                                 <CardContent>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                       <b>Venue:</b> {event.venue}
                                    </Typography>
                                    <Button
                                       variant='contained'
                                       color='secondary'
                                       size='small'
                                       style={{ marginTop: '5px' }}
                                       src={event.register}>
                                       Register Now
                                    </Button>
                                 </CardContent>
                              </TimelineEvent>
                           </Timeline>
                        ))}
                     </div>
                  </Grid>

                  <Grid item md={2} />

                  <Grid item direction='column' justify='center' alignItems='center' md={4}>
                     <div>
                        {paevent.map(event => (
                           <Grid item key={event.id}>
                              <br />
                              <Card
                                 className='card--shadow'
                                 style={{
                                    maxHeight: 'auto',
                                    minHeight: 'auto',
                                    borderRadius: '20px'
                                 }}>
                                 <CardContent>
                                    <Typography variant='h5' component='p' className='letter_spacing'>
                                       {event.title}
                                    </Typography>
                                 </CardContent>
                                 <Divider />
                                 <br />
                                 <CardContent className='card_content_top'>
                                    <Typography variant='body2' color='Secondary' component='p'>
                                       <b>{event.date}</b>
                                    </Typography>
                                 </CardContent>
                                 <CardContent className='card_content_top'>
                                    <Typography
                                       variant='body2'
                                       color='textSecondary'
                                       component='p'
                                       style={{ letterSpacing: '0.9px', lineHeight: '24px' }}>
                                       {event.description}
                                    </Typography>
                                 </CardContent>
                                 <Divider variant='inset' />

                                 <CardContent style={{ marginLeft: '50px' }}>
                                 <Button variant='outlined' color='primary' style={{ marginLeft: '10px' }} href={event.feedback}>
                                       Feedback
                                    </Button>
                                    <Button variant='outlined'  style={{ marginLeft: '10px' }} href={event.todo}>
                                       Resources
                                    </Button>
                                 </CardContent>
                              </Card>
                           </Grid>
                        ))}
                     </div>
                  </Grid>
               </Grid>
               <br />
               <br />
            </section>
         </Container>
      </div>
   );
};

export default Events;
