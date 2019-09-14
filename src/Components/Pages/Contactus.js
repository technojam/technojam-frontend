import React from 'react'
import Container from '@material-ui/core/Container';
import { Hidden } from '@material-ui/core';
/* @person who is assigned this page set your styles here. height 600 is just for layout.*/
const style ={
  
  
   
}

function Contactus() {
    return(
        <Container maxWidth="sm">
        <div className="contactus" >
            <br></br>
            <Hidden smUp>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeaesLCX8qedDLQVu3qLrP9xQX-NpaN3ZUzKDwMSJjf59vRTg/viewform?embedded=true" width="300px" height="700px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Hidden>
           
            <Hidden smDown>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeaesLCX8qedDLQVu3qLrP9xQX-NpaN3ZUzKDwMSJjf59vRTg/viewform?embedded=true" width="640px" height="646px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Hidden>

        </div>
        </Container>
    );
}
export default Contactus;
