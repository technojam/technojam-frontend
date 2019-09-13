import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';
import Placeholder from '../../images/Placeholder.jpg';
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop:20,
    marginBottom:20,
  },  
}));
const circle={
    width: 80,
    borderRadius: 40,
}

const tileData = [
  {
    img: Placeholder,
    title: "Image",
    Name: "Shivam Mittal"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Kritika Saxena"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Anubhav Raj Singh"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Satyam Bharti"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Shivam Sharma"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Sakshi Gupta"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Darshan Baid"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Honey Sharma"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Rahul Chauhan"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Ankush Shrivastava"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Deepanshu Goyal"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Lokesh Tiwari"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Neham soni"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Prakhar Srivastava"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Naman Jain"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Anshika soni"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Ravi "
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Vidit Varshney"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Rohith Kandi"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "rahul godella"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Aman"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Rahul Singh "
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Vishal Kumar"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Shreyansh Deep"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Shashwat Singh"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "DANISH JAMAL"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "PRIYANSHU TRIVEDI"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Ayush Tiwari"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Astha Singh"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Abhimanyu Dwivedi"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Manas Khurana"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Vineeta chaudhary"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Saloni mehra"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Himanshu Singh"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Ayush Gupta"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Kushagra Singhal"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Ashwani Tripathi"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Neham soni"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Vineeta chaudhary"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Shashwat Singh"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Akshat akarsh"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Pradeep"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Anurag Verma"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "Mayank Jain "
  },
  {
    img: Placeholder,
    title: "image",
    Name: "Saurabh kumar"
  },
  {
    img: Placeholder,
    title: "image",
    Name: "Anil kumar yadav"
  },
  {
    img: Placeholder,
    title: "image",
    Name: "Saloni mehra"
  },
  {
    img: Placeholder,
    title: "image",
    Name: "Praveen singh"
  },
  {
    img: Placeholder,
    title: "Image",
    Name: "ANKIT ANMOL SRIVASTAVA "
  },
 ];

  
export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{color:"rgb(19, 20, 21)",textAlign:"center"}}>
      Our Team
      </h1>
      <Container fixed >
       <Grid container spacing={3} >
        {tileData.map(tile => (
        <Grid item xs={3} sm={2} lg={1}>
            <Tooltip title={tile.Name}>
              <img src={tile.img} alt={tile.title} style={circle}/>        
            </Tooltip>
           
        </Grid> 
        ))}
       </Grid>
      </Container>
      </div>
  );
}

/*{tile.name} To be deleted which is not in the tooltip after uploading pictures of every team members */
