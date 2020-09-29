import React, { Component, useState } from "react";
//material ui component
import mobile from "../../images/mobile.jpg";
import desktop from "../../images/desktop.png";
import { Grid, Typography, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "../style.css";
import { Color } from "../color";

import "../style.css";

const style = {
    overFlow: "hidden",
    marginTop: "60px",
    marginBottom: "-30px",
    square: {
        border: "4px solid #fafafa",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "75px",
        minWidth: "500px",
        marginLeft: "30px",
    },
    square1: {
        border: "2px solid #fafafa",
        minWidth: "285px",
        margin: "6px",
    },
    back: {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPositionX: "0%",
    },
    button: {
        color: "white",
        backgroundColor: "#ff3b01f5",
        padding: "10px 23px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "600",
    },
    button_text: {
        color: "white",
    },
};

/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

const Homepage = () => {
    const [content] = useState([
        {
            content:
                "Technology makes it doable for individuals to achieve management over everything, except over technology. Technology is such a lot of fun, however, the likelihood of drowning in it's high. Our goal is to assist, nurture future developers and leaders and build a pool of extremely good school personnel, that is quickly employable by the business and facilitate spur innovation. We help students perceive up-to-date engineering. Explore completely different areas of interest. Produce social connections wherever students with numerous technology experience come together and share knowledge.",
            title: "About us",
            cta: "/aboutus",
            buttonname: "Know more",
            backgroundImageUrl: "../../images/mobile.jpg ",
            backgroundImageUrlM: "#",
        },
    ]);

    return (
        <div style={style}>
            {content.map((item) => (
                <div>
                    <Hidden smDown>
                        <div
                            id="1"
                            style={{
                                ...style.back,
                                backgroundImage: `url(${desktop})`,
                            }}
                            key={item.title}
                        >
                            <div>
                                <Grid container xs={6} sm={3} md={3}>
                                    <div style={style.square}>
                                        <div className="home_grid">
                                            <Typography
                                                variant="h3"
                                                className="letter_spacing"
                                                style={{
                                                    color: "#000000cf",
                                                    fontWeight: "900",
                                                    fontSize: "36px",
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <br />
                                            <Typography
                                                variant="body2"
                                                className="home_grid_typo"
                                                style={{
                                                    fontSize: "19px",
                                                    color: "#000000bf",
                                                    fontWeight: "500",
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                {item.content}
                                            </Typography>
                                            <br />
                                            <Button
                                                variant="contained"
                                                style={style.button}
                                            >
                                                <a
                                                    href={item.cta}
                                                    target="_blank"
                                                    style={style.button_text}
                                                >
                                                    {item.buttonname}
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <div
                            id="2"
                            style={{
                                ...style.back,
                                backgroundImage: `url(${mobile})`,
                            }}
                        >
                            <Grid container xs={6} sm={3} md={3}>
                                <div style={style.square1}>
                                    <div className="home_grid letter_spacing">
                                        <Typography
                                            variant="h3"
                                            style={{
                                                color: "black",
                                                fontSize: "28px",
                                                lineHeight: "2",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className="home_grid_typo"
                                            style={{
                                                fontSize: "16px",
                                                color: "black",
                                                lineHeight: "1.6",
                                            }}
                                        >
                                            {item.content}
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            style={style.button}
                                        >
                                            <a href={item.cta} target="_blank">
                                                {item.buttonname}{" "}
                                            </a>
                                        </Button>
                                        {/* <Button
                                            variant="contained"
                                            style={style.button}
                                        >
                                            {item.buttonname}{" "}
                                            <a
                                                href={item.cta}
                                                target="_blank"
                                            />
                                        </Button> */}
                                    </div>
                                </div>
                            </Grid>
                        </div>
                    </Hidden>
                </div>
            ))}
        </div>
    );
};

export default Homepage;
