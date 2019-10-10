
import React, {Fragment, useState, setCount} from "react";
import {TopMenu, Footer} from "./Components/Layouts";
import Maincontent from "./Components/Maincontent";


const sectionStyle = {
   backgroundImage: 'url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/Capture.png)',
   backgroundRepeat: 'repeat',
   backgroundPositionX: 'center',
   position: 'absolute',
   width: '100%',
   top: '0'
};

function App(props) {

  const [panel, setPanel] = useState(false);
  const [route ] = useState('signin'); 
  const [ homes, setCount] = useState('home'); 


  function toggleButton() {
    if (!panel) setPanel(true);
    else setPanel(false);

    if (panel === false) {
      document.getElementById("ToggleButton").style.background = "#161625";
    }
  }
 
  function onRouteChange() {
      setCount(homes);
    }


  return (
    <div className="App" style={sectionStyle}>
     
        {  route === 'signin'
          ? <TopMenu onRouteChange={onRouteChange} toggleButton={toggleButton} />
          : <div>
          <Maincontent />
         <br />
         <br />
         <br />
         <Footer />
          </div>
         }
   </div>
);
  }

export default App;
