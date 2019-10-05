import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Hidden } from "@material-ui/core";
import '../style.css';
import { Color } from "../color";

/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

class pannel extends Component {
  constructor(props) {
    super(props);
    //Until backend add data here cards will be created automatically.
    this.state = {
      member: [
        {
          id: 1,
          name: "Honey Sharma",
          email: "honey.singhroi@gmail.com",
          password:""
         
        }
      ]
    };
  }

  render() {
    const member = this.state.member;

    return (
      <Container maxWidth="lg">
          

            </Container>
        );
    }
}
export default pannel;
