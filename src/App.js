import React, {Fragment, useState} from "react";
import {Footer, TopMenu} from "./Components/Layouts";
import Maincontent from "./Components/Maincontent";
import {Fab, Icon} from "@material-ui/core"

const sectionStyle = {
    backgroundImage: 'url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/Capture.png)',
    backgroundRepeat: 'repeat',
    backgroundPositionX: 'center',
    position: 'absolute',
    width: '100%',
    top: '0'
};

const fabPosition = {
    bottom: '10vh',
    position: 'fixed',
    margin: '1em',
    right: '8vw',
};

function App() {
    const [panel, setPanel] = useState(false);

    function toggleButton() {
        if (!panel) setPanel(true);
        else setPanel(false);

        if (panel === false) {
            document.getElementById("ToggleButton").style.background = "#161625";
        }
    }

    return (
        <div className="App" style={sectionStyle}>
            <Fragment>
                <TopMenu toggleButton={toggleButton}/>
                <Maincontent/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </Fragment>
            <div style={fabPosition}>
                <Fab color="secondary" onClick={() => window.scrollTo(0, 0)}>
                    <Icon style={{height: "auto"}} className="fas fa-chevron-up"/>
                </Fab>
            </div>
        </div>
    );
}

export default App;

