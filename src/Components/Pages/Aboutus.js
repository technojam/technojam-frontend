import React from 'react';
//material ui Component
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import '../style.css';

const Aboutus = () => (
   <Container maxWidth='lg'>
      <div className='aboutus view_container'>

        <Card className='card--shadow' style={{ backgroundColor: ' #4285f4',opacity: '0.8', color: '#fff', 'border-radius':'10px', 'margin-top':'160px'}}>
          <Grid container direction='row' justify='center' alignItems='center' spacing={4}>
            <Grid item lg={3} md={3} sm={3}>
               <CardContent>
                  <CardMedia className='align_center'>
                     <img src='https://tj-static.s3.ap-south-1.amazonaws.com/etc/team.svg' width='50%' height='auto' />
                  </CardMedia>
                  <br />
                  <Typography style={{ alignItems: 'Center' }}>
                     Team TechnoJam consist of 50 people and we all work together like a strong team.
                  </Typography>
               </CardContent>
            </Grid>
            <Grid item lg={3} md={3} sm={3}>
               <CardContent>
                  <CardMedia className='align_center'>
                     <img src='https://tj-static.s3.ap-south-1.amazonaws.com/etc/attendees.svg' width='50%' height='auto' />
                  </CardMedia>
                  <br />
                  <Typography style={{ alignItems: 'Center' }}>
                     Technojam conducts more than 40+ events at Galgotias institution per year.
                  </Typography>
               </CardContent>
            </Grid>
            <Grid item lg={3} md={3} sm={3}>
               <CardContent>
                  <CardMedia className='align_center'>
                     <img src='https://tj-static.s3.ap-south-1.amazonaws.com/etc/event-management.svg' width='50%' height='auto' />
                  </CardMedia>
                  <br />


                        <Typography style={{ alignItems: 'Center' }}>
                           TechnoJam has Reached upto 3000+ attendee through its workshops, Hackathons.
                        </Typography>
                     </CardContent>
                  </Grid>
               </Grid>
         </Card>
  
         <br />
         <br />
         <br />
         <br />
         <div>
            <Grid container direction='row' justify='center' alignItems='center' spacing={6}>
               <Grid item lg={6} md={6} sm={12} alignItems='center'>
                  <Card className='card--shadow card_style' style={{ backgroundColor: ' #e03030' }}>
                     <CardContent>
                        <Typography variant='h3' className='card_content_h3'>
                           Our Vision
                        </Typography>
                     </CardContent>
                     <CardContent>
                        <Typography variant='body1' className='card_content_body1' style={{ lineHeight: '29px' }}>
                           <p>
                              To work on various innovative projects which will bestow creative minds thinking patterns to the upcoming
                              future engineer/scientist so that our mind can boost enough so that we can face any hurdles in the way of
                              learning new tactics to deal with ever changing or dynamic technology.
                           </p>
                           <p>
                              Also we hope, it is our soul duty to work on those projects which will make our institute technically advanced
                              and prepare our country well enough to compete with other established high tech countries & also the emerging
                              countries which are technically very sound.
                           </p>
                           <p> We are technically far behind in compare to those technically advanced countries.</p>
                           <p>
                              {' '}
                              There can be an abrupt change only if we toil hard with a never say die spirit having 100% dedication and
                              devotion to our work, motivating and inspiring the young and creative minds in the direction of technology.
                           </p>
                           <p>We as a OS community would try our best to give back to our community.</p>
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
               <Grid item lg={6} md={6} sm={12}>
                  <Card className='card--shadow card_style' style={{ backgroundColor: '#33a351' }}>
                     <CardContent>
                        <Typography variant='h3' className='card_content_h3'>
                           Our Mission
                        </Typography>
                     </CardContent>
                     <CardContent>
                        <Typography variant='body1' className='card_content_body1' style={{ lineHeight: '29px' }}>
                           <p>
                              1. To develop a platform where the technical innovativeness of students could be nurtured and given a
                              practical shape so as to improve the technical abilities of students as well as the reputation of institute as
                              a leader in innovation and creativity.
                           </p>
                           <p>
                              2. To enhance the technical innovativeness of our institute students by organizing the workshops and
                              competitions on various technical level in order to attract the interest of the student s towards technical
                              aspects of their education.
                           </p>
                           <p>
                              3. Provide a platform where the students can put their innovative efforts and clear their doubts to transform
                              them into reality.
                           </p>
                           <p>4. Work on live projects to make the institute high-tech.</p>
                           <p>
                              5. Represent our institute by participating at National level Tech-Fest and other technical events all around
                              the nation.
                           </p>
                           <p /> <br />
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
            </Grid>
         </div>
      </div>
      <br />
      <br />
   </Container>
);
export default Aboutus;
