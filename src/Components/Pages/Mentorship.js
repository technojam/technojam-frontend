import React, { Component, useState } from 'react';
// material ui component
import Container from '@material-ui/core/Container';
import { Typography, Grid } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import '../style.css';
import { Color } from '../color';

const sectionStyle = {
   width: '100%',
   height: '100vh',
   backgroundImage: 'url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/pro.jpg)',
   backgroundRepeat: 'no-repeat',
   marginTop: '40px',
   backgroundPositionX: 'center',
   backgroundSize: 'cover'
};

/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

const Mentorship = () => {
   const [projects] = useState([
      {
         id: 1,
         title: 'Technojam-Frontend',
         info: 'Technojam-Frontend is a web application. It is build on React. It also contain night mode and backend services.',
         repolink: 'https://github.com/technojam/technojam-frontend',
         slack: '#',
         mentor: 'Ravi, Aman and Prakhar',
         Skills: 'ReactJS, HTML, CSS, JAVASCRIPT',
         telegram: '#'
      },
      {
         id: 2,
         title: 'Technojam-backend',
         info: 'Technojam-Backend is build on Node and express Js. It uses MongoDB as its database.',
         repolink: 'https://github.com/technojam/technojam-backend',
         slack: '#',
         mentor: 'Himanshu, Shivam and Abhimanyu',
         Skills: 'NodeJS, Express, MongoDB',
         telegram: '#'
      }
   ]);

   return (
      <section>
         <div id='1'>
            <div style={sectionStyle}>
               <div className='mentor_section_div' style={{ paddingTop: '330px' }}>
                  <Typography variant='h3' className='letter_spacing'>
                     2019 Projects
                  </Typography>
                  <br />
                  <br />

                  <Typography
                     variant='body2'
                     style={{
                        letterSpacing: '1px',
                        fontSize: '21px',
                        lineHeight: '35px',
                        wordSpacing: '5px'
                     }}>
                     Technojam Mentorship initiative is a global program focused on introducing students to open source software
                     development. Since its inception this program aims on giving the very best experince of GSOC to enthusiast.
                  </Typography>

                  <div className='mentor_section_div' style={{ paddingTop: '20px' }}>
                     <Typography variant='h6' className='letter_spacing'>
                        Know
                        More&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;
                     </Typography>
                     <br />

                     <Typography variant='h5' className='letter_spacing'>
                        <a href=' https://twitter.com/technojam_gu' target='_blank' rel='noopener noreferrer'>
                           <i className='fab fa-twitter fa-lg' style={{ color: Color.color_twitter }} />
                        </a>&#8194;
                        <a href='https://tjosc.slack.com/' target='_blank' rel='noopener noreferrer'>
                           <i className='fab fa-slack fa-lg' style={{ color: '#e44134' }} />
                        </a>&#8194;
                        <a href='/' target='_blank' rel='noopener noreferrer' />
                        <a href='/' target='_blank'>
                           <i className='fab fa-telegram-plane fa-lg' style={{ color: '#f4b602' }} />
                        </a>&#8194;
                        <a href='https://www.linkedin.com/company/technojam/' target='_blank' rel='noopener noreferrer'>
                           <i className='fab fa-linkedin fa-lg' style={{ color: Color.color_twitter }} />
                        </a>&#8194;
                        <a href='https://www.facebook.com/technojam.scse/?ref=br_rs' target='_blank' rel='noopener noreferrer'>
                           <i className='fab fa-facebook fa-lg' style={{ color: '#33a351' }} />
                        </a>&#8194;
                        <a href='https://instagram.com/technojam_galgotias' target='_blank' rel='noopener noreferrer'>
                           <i className='fab fa-instagram fa-lg' style={{ color: '#e44134' }} />
                        </a>&#8194;
                     </Typography>
                  </div>
               </div>
            </div>
         </div>

         <div id='2' style={{ marginTop: '50px' }}>
            <Container maxWidth='lg'>
               <Grid container spacing={3} direction='row' justify='flex-start' alignItems='flex-start'>
                  {projects.map(project => (
                     <Grid item xs={12} sm={6} md={6} key={project.id}>
                        <ExpansionPanel
                           className='card--shadow'
                           style={{
                              marginTop: '20px',
                              marginBottom: '20px',
                              minHeight: '123px'
                           }}>
                           <ExpansionPanelSummary>
                              <Grid item md={6} xl={6} alignContent='flex-end' justify='flex-end'>
                                 <Typography
                                    variant='h5'
                                    component='p'
                                    className='letter_spacing'
                                    style={{
                                       textAlign: 'end',
                                       fontSize: '32px'
                                    }}>
                                    {project.title}
                                    <Typography style={{ textAlign: 'center' }}>
                                       <i class='fas fa-arrow-circle-down fa-2x' style={{ color: '#33a351' }} />
                                    </Typography>
                                 </Typography>
                              </Grid>
                              <Grid item md={6} xl={6}>
                                 <Typography className='grid_item_typo'>{project.info}</Typography>
                              </Grid>
                           </ExpansionPanelSummary>

                           <ExpansionPanelDetails>
                              <Grid item md={6} xl={6}>
                                 <Typography variant='h6' className='letter_spacing' style={{ textAlign: 'end' }}>
                                    Tech Stack
                                 </Typography>
                              </Grid>
                              <Grid item md={6} xl={6}>
                                 <Typography className='grid_item_typo'>{project.Skills}</Typography>
                              </Grid>
                           </ExpansionPanelDetails>
                           <ExpansionPanelDetails>
                              <Grid item md={6} xl={6}>
                                 <Typography variant='h6' className='letter_spacing' style={{ textAlign: 'end' }}>
                                    Maintainers
                                 </Typography>
                              </Grid>
                              <Grid item md={6} xl={6}>
                                 <Typography className='grid_item_typo'>{project.mentor}</Typography>
                              </Grid>
                           </ExpansionPanelDetails>

                           <ExpansionPanelDetails>
                              <Grid item md={6} xl={6}>
                                 <Typography variant='h6' className='letter_spacing' style={{ textAlign: 'end' }}>
                                    Discussion
                                 </Typography>
                              </Grid>
                              <Grid item md={6} xl={6}>
                                 <Typography className='grid_item_typo'>
                                    <a href={project.slack} target='_blank' rel='noopener noreferrer'>
                                       <i className='fab fa-slack fa-2x' style={{ color: '#e44134' }} />
                                    </a>&#8194;
                                    <a href={project.telegram} target='_blank' rel='noopener noreferrer'>
                                       <i className='fab fa-telegram fa-2x' style={{ color: '#f4b602' }} />
                                    </a>
                                 </Typography>
                              </Grid>
                           </ExpansionPanelDetails>
                           <ExpansionPanelDetails>
                              <Grid item md={6} xl={6}>
                                 <Typography variant='h6' className='letter_spacing' style={{ textAlign: 'end' }}>
                                    Repository
                                 </Typography>
                              </Grid>
                              <Grid item md={6} xl={6}>
                                 <Typography className='grid_item_typo'>
                                    <a href={project.repolink} target='_blank' rel='noopener noreferrer'>
                                       <i className='fa fa-link fa-2x' style={{ color: '#be38ae' }} />
                                    </a>&#8194;
                                 </Typography>
                              </Grid>
                           </ExpansionPanelDetails>
                        </ExpansionPanel>
                     </Grid>
                  ))}
               </Grid>
            </Container>
         </div>
      </section>
   );
};

export default Mentorship;
