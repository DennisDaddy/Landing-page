import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Contact from "./components/Contact";

function App() { 
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes with all you need for daily life' button='Get the App' />
      <About image={aboutimage1} title='Download and get the app' button='Download' />
      <Contact/>
    </div>
  );
}

export default App;
