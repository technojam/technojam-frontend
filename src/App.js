import React, { Fragment } from "react";
import "./App.css";
import { TopMenu, Footer } from "./Components/Layouts";
import Maincontent from "./Components/Maincontent";

var sectionStyle = {
  backgroundImage:
    "url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/Capture.png)",
  backgroundRepeat: "repeat",
  backgroundPositionX: "center",
  position: "absolute",
  width: "100%",
  top: "0"
};

function App() {
  return (
    <div className="App" style={sectionStyle}>
      <Fragment>
        <TopMenu />

        <Maincontent />
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
