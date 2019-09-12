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
      title: 'Image',
      name: 'Ravi ',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'Abhi',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'Aman',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'Ravi ',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'Abhi',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'Aman',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    }, {
      img: Placeholder,
      title: 'Image',
      name: 'Ravi ',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'Abhi',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'Aman',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
    },
    {
      img: Placeholder,
      title: 'Image',
      name: 'name',
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
            <Tooltip title={tile.name}>
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
