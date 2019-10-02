import React, { Fragment } from 'react';
import './App.css';
import { TopMenu, Footer} from './Components/Layouts'
import Maincontent from './Components/Maincontent'

var sectionStyle = {
    width: "100%",
    height: "auto",
    backgroundImage: "url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/Capture.png)",
    backgroundRepeat: "repeat-y",
    backgroundPositionX: "center"

};

function App() {
    return (
        <Fragment>
            <div className="App" style={sectionStyle}>
                <Fragment>
                    <TopMenu />

                    <Maincontent />

                </Fragment>

            </div>
            <Footer />
        </Fragment>
    );
}

export default App;
