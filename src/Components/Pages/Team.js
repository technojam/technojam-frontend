import React from "react";

//material ui component
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
const style = {
  height: "83vh"
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    marginBottom: 20,
    minHeight: "580px"
  }
}));
const circle = {
  width: 80,
  borderRadius: 40
};
const tileData = [
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Anubhav Raj Singh.jpeg",
    tilte: "Image",
    Name: "Anubhav Raj Singh"
  },
  {
    img: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Swetank.jpg",
    tilte: "Image",
    Name: "Swetank"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Ravi Saxena.jpeg ",
    tilte: "Image",
    Name: "Ravi "
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Abhimanyu Dwivedi.jpg",
    tilte: "Image",
    Name: "Abhimanyu Dwivedi"
  },
  {
    img: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Aman.jpg",
    tilte: "Image",
    Name: "Aman"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Anil Kumar.jpg",
    tilte: "Image",
    Name: "Anil kumar yadav"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Ankit Srivastava.jpg ",
    tilte: "Image",
    Name: "ANKIT ANMOL SRIVASTAVA "
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Anshika Soni.jpg",
    tilte: "Image",
    Name: "Anshika soni"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Anurag Verma.png",
    tilte: "Image.jpg",
    Name: "Anurag Verma"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/ASHWANI TRIPATHI.jpg",
    tilte: "Image",
    Name: "Ashwani Tripathi"
  },
  {
    img: "https://tj-static.s3.ap-south-1.amazonaws.com/Img/Astha+Singh.jpg",
    tilte: "Image",
    Name: "Astha Singh"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Ayush Gupta.jpg",
    tilte: "Image",
    Name: "Ayush Gupta"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Ayush Tiwari.jpg",
    tilte: "Image",
    Name: "Ayush Tiwari"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Danish Jamal.jpeg",
    tilte: "Image",
    Name: "DANISH JAMAL"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Darshan Baid.jpg",
    tilte: "Image",
    Name: "Darshan Baid"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Deepanshu Goyal.jpg",
    tilte: "Image",
    Name: "Deepanshu Goyal"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Himanshu Singh.jpg",
    tilte: "Image",
    Name: "Himanshu Singh"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Kritika Saxena.jpg",
    tilte: "Image",
    Name: "Kritika Saxena"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Kushagra Singhal.jpg",
    tilte: "Image",
    Name: "Kushagra Singhal"
  },
  {
    img: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Lokesh.jpg",
    tilte: "Image",
    Name: "Lokesh Tiwari"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Manas Khurana.JPG",
    tilte: "Image",
    Name: "Manas Khurana"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Mayank Jain.jpeg ",
    tilte: "Image",
    Name: "Mayank Jain "
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Naman Jain.jpg",
    tilte: "Image",
    Name: "Naman Jain"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Prakhar Srivastava.jpg",
    tilte: "Image",
    Name: "Prakhar Srivastava"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Praveen Singh.jpg",
    tilte: "Image",
    Name: "Praveen singh"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Priyanshu Trivedi.jpg",
    tilte: "Image",
    Name: "PRIYANSHU TRIVEDI"
  },
  {
    img: "https://tj-static.s3.ap-south-1.amazonaws.com/Img/Rahul+Chauhan.jpeg",
    tilte: "Image",
    Name: "Rahul Chauhan"
  },
  {
    img: "https://tj-static.s3.ap-south-1.amazonaws.com/Img/Rahul+Godella.jpg",
    tilte: "Image",
    Name: "rahul godella"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Rahul Singh.jpg ",
    tilte: "Image",
    Name: "Rahul Singh "
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/sakshi gupta.jpg",
    tilte: "Image",
    Name: "Sakshi Gupta"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Saloni Mehra.jpg",
    tilte: "Image",
    Name: "Saloni mehra"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Satyam Bharti.jpeg",
    tilte: "Image",
    Name: "Satyam Bharti"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/SHASHWAT SINGH.jpg",
    tilte: "Image",
    Name: "Shashwat Singh"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Shivam Sharma.jpg",
    tilte: "Image",
    Name: "Shivam Sharma"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Shreyansh Deep.jpg",
    tilte: "Image",
    Name: "Shreyansh Deep"
  },
  {
    img: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Vidit.jpg",
    tilte: "Image",
    Name: "Vidit Varshney"
  },
  {
    img:
      "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Vishal Kumar.jpg",
    tilte: "Image",
    Name: "Vishal Kumar"
  }
];

export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h3"
        style={{
          fontFamily: "Roboto",
          letterSpacing: "1px",
          lineHeight: "28px",
          wordSpacing: "5px",
          textAlign: "center",
          color: "#073fff"
        }}
      >
        Our Team
      </Typography>
      <hr
        style={{
          maxWidth: "120px",
          borderWidth: "0.6px",
          opacity: "1",
          marginTop: "25px",
          marginBottom: "25px",
          borderColor: "#007FFF"
        }}
      ></hr>
      <br></br>

      <Container fixed>
        <Grid container spacing={3}>
          {tileData.map(tile => (
            <Grid item xs={3} sm={2} lg={1}>
              <Tooltip title={tile.Name}>
                <img src={tile.img} alt={tile.title} style={circle} />
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

/*{tile.name} To be deleted which is not in the tooltip after uploading pictures of every team members */
