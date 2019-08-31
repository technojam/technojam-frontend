import React, { Fragment } from 'react';
import './App.css';
import { TopMenu, Footer} from './Components/Layouts'
import Maincontent from './Components/Maincontent'

function App() {
  return (
    <div className="App">
      <Fragment>
      <TopMenu />
      <Maincontent />
      <Footer/>
      </Fragment>

    </div>
  );
}

export default App;
