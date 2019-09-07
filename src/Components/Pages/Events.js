import React, { Component } from "react";


//material ui component
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


class Events extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {
            event: [

                {
                    id: 1,
                    title: "NASA space Challenge",
                    date: "Spetember 15, 2019",
                    Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized by NASA",
                    Image: "https://storage.cloud.google.com/tjimage/space.jpg",

                },


            ]
        }
    }

    render() {



        const event = this.state.event;

        console.log(event);
        return (

            <div>
                <Grid
                    container
                    direction="row"
                
                >
                    {event.map(event => (

                        <Grid direction="row" justify="flex-start" alignItems="flex-start" style={{width:"42%",}}>
                         <div style={{borderRadius: "20px"}}>
                                                    
                                                    <CardMedia>

                                                        <img src={event.Image} width="100%" height="100%" />

                                                    </CardMedia>
                                                    </div>
                        
                        </Grid>


                    ))}






                </Grid>

            </div>

        );
    }
}


export default Events;