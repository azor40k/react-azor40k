import React, { useState } from 'react';
import Footer from './Components/Footer';
import Routing from './Route/Router'
import './App.scss';

function App() {

  return (
    <div className="App">
        <Footer />
        <Routing />
    </div>
  );
}

export default App;
