import React from 'react';
import './App.css';
import { TopMenu, Footer} from './Components/Layouts'
import Maincontent from './Components/Maincontent'

function App() {
  return (
      <>
      <TopMenu />
      <Maincontent />
      <Footer/>
      </>
  );
}

export default App;
