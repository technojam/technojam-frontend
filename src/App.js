import React from 'react';
import './App.css';
import { TopMenu, Footer} from './Components/Layouts'
import Maincontent from './Components/Maincontent'

function App() {
  return (
    <div className='stickyFooter'>
      <TopMenu />
      <div className="appContent" >
        <Maincontent />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
