import React, {useState} from 'react';
//material ui component
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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


    const upcomingEventStyle = {
        background: "rgb(33, 150, 243)",
        borderRadius: "20px",
        boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
    };

    const pastEventStyle = {
        background: "#ECECEC",
        borderRadius: "20px",
        boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
    };

    return (
        <div>
            <Container maxWidth='xl' style={{width: '100%', top: '0'}}>
                <section style={{marginBottom: '15px', marginTop: '65px', width: '100%'}}>
                    <VerticalTimeline className="timeline">
                        {upevent.map(event => (
                                <VerticalTimelineElement
                                    className="vertical-timeline-technojam"
                                    contentStyle={upcomingEventStyle}
                                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                                    date={event.date}
                                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                >
                                    <h5>{event.title}</h5>
                                    <Divider />
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        component='p'
                                        style={{letterSpacing: '0.9px', lineHeight: '24px'}}>
                                        {event.description}
                                    </Typography>
                                    <br />
                                    <Divider />
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        <b>Venue:</b> {event.venue}
                                    </Typography>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        size='small'
                                        style={{marginLeft:'5px',marginTop: '5px'}}
                                        src={event.register}>
                                        Register Now
                                    </Button>
                                </VerticalTimelineElement>
                            )
                        )}
                        {paevent.map(event => (
                                <VerticalTimelineElement
                                    className="vertical-timeline-technojam"
                                    contentStyle={pastEventStyle}
                                    contentArrowStyle={{borderRight: '7px solid  #ECECEC'}}
                                    date={event.date}
                                    iconStyle={{background: '#ECECEC', color: '#fff'}}
                                >
                                    <h5>{event.title}</h5>
                                    <Divider />
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        component='p'
                                        style={{letterSpacing: '0.9px', lineHeight: '24px'}}>
                                        {event.description}
                                    </Typography>
                                    <br/>
                                    <Divider variant='inset' />
                                    <br/>
                                    <a
                                        className='btn btn-social-icon btn-github'
                                        href={event.todo}
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        <i className='fab fa-github fa-lg' style={{color: 'black'}}/>
                                    </a>
                                    <Button variant='outlined' color='primary' style={{marginLeft: '10px'}}
                                            href={event.feedback}>
                                        Feedback
                                    </Button>
                                </VerticalTimelineElement>
                            )
                        )}
                    </VerticalTimeline>
                    <br/>
                    <br/>
                </section>
            </Container>
        </div>
    );
};

export default Events;
